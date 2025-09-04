const companyInfo = {
	name: 'ACME, Inc.',
	address1: '555 Main Street',
	address2: 'Saint Louis, MO 63101',
	email: 'info@acme.com',
	phone: '(314) 555-ACME',
	website: 'www.acme.com',
};

const businessHours = {
	Sunday: 'Closed',
	Monday: '9AM-5PM',
	Tuesday: '9AM-5PM',
	Wednesday: '9AM-5PM',
	Thursday: '9AM-5PM',
	Friday: '9AM-5PM',
	Saturday: 'Closed',
};

function formatBusinessHours() {
	let hours = 'Open for Business:\n\n';
	for (day in businessHours) {
		if (businessHours[day] !== 'Closed') {
			hours += `\t${day}: ${businessHours[day]}\n`;
		}
	}
	return hours;
}


function printOrgInfo() {
    console.log(`
Thank you for your interest in ACME! 
To learn more about our company, visit our website:
${companyInfo.website}

${companyInfo.name}
${companyInfo.address1}
${companyInfo.address2}

${companyInfo.phone} | ${companyInfo.email}

${formatBusinessHours()}
        `)
}

module.exports = printOrgInfo;
