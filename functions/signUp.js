/* eslint-disable  */
const axios = require("axios");
require("dotenv").config();

exports.handler = function signUp(event, context, callback) {
  const password = process.env.REACT_APP_MAILCHIMP_API_KEY;
  if (!password) {
    console.error("No MailChimp API Key include in environment variables");
    process.exit(1);
  }

  const parsedBody = JSON.parse(event.body);
  const email = parsedBody.email; // eslint-disable-line
  const merge = parsedBody.merge; // eslint-disable-line
  const interests = parsedBody.interests; // eslint-disable-line

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email)) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({ msg: "Invalid Email" })
    });
  }

  const body = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      ...merge
    },
    interests: {
      ...interests
    }
  };

  const username = "jepras";

  axios({
    method: "post",
    url:
      "https://jepras.us14.list-manage.com/subscribe/post?u=671c8542725c29d88f8ea0ec8&amp;id=7b9368fc3c",
    data: body,
    auth: {
      username,
      password
    }
  })
    .then(response =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          msg: "Success!"
        })
      })
    )
    .catch(({ response }) => {
      let title = "";
      if (response && response.data && response.data.title) {
        title = response.data.title;
      }
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          msg: `Failed to sign up. ${title}`
        })
      });
    });
};
