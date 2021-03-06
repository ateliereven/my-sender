const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // from emailregex.com

const validateEmails = (emails) => {
    let invalidEmails = emails.split(',')
        .map(email => email.trim())
        .filter(email => re.test(email) === false);

    if (invalidEmails.length) {
        if (invalidEmails.includes("")) {
            return 'Remove the comma or add another email address'
        }
        return `These email addresses are invalid: ${invalidEmails}`;
    }
};

export default validateEmails;