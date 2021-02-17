const nodemailer = require('nodemailer');

const generateOrderEmail = ({ order, total }) => {
  return `<div>
    <h2>Your order for ${total}</h2>
    <ul>
      ${order
        .map((item) => {
          return `<li>${item.name} ${item.sie} - ${item.price}</li>`;
        })
        .join('')}
    </ul>
  </div>`;
};

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  if (body.maplHidden) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Boob beep!' }),
    };
  }

  const requiredFields = ['email', 'name', 'order'];

  for (const field of requiredFields) {
    console.log(`Checking ${field}`);

    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Opps! You are missing the ${field} field`,
        }),
      };
    }
  }

  // Check Order Array
  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `You don't order pizzas`,
      }),
    };
  }

  // send mail
  const info = await transporter.sendMail({
    from: 'Pizza Masters <pizzamasters@example.com>',
    to: `${body.name} <${body.email}>, orders@example.com`,
    subject: 'Your order from Pizza Masters!',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success!' }),
  };
};
