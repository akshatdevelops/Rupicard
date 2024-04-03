fetch('dummydata.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('fullName').innerText += ` ${data.customerDetails.name}`;
        document.getElementById('address').innerText += ` ${data.customerDetails.address}`;
        document.getElementById('phone').innerText += ` ${data.customerDetails.phone}`;
        document.getElementById('cardNumber').innerText += ` ${data.customerDetails.cardNumber}`;

        document.getElementById('statementDate').innerText = data.summary.statementDate;
        document.getElementById('statementDuration').innerText = data.summary.statementDuration;
        document.getElementById('dueDate').innerText = data.summary.dueDate;
        document.getElementById('totalDue').innerText = data.summary.totalDue;
        document.getElementById('minimumDue').innerText = data.summary.minimumDue;
        document.getElementById('creditLimit').innerText = data.summary.creditLimit;
        document.getElementById('availableCreditLimit').innerText = data.summary.availableCreditLimit;
        document.getElementById('availableCashLimit').innerText = data.summary.availableCashLimit;

        document.getElementById('openingBalance').innerText = data.calculation.openingBalance;
        document.getElementById('debit').innerText = data.calculation.debit;
        document.getElementById('financeCharge').innerText = data.calculation.financeCharge;
        document.getElementById('credit').innerText = data.calculation.credit;
        document.getElementById('totalDueCalc').innerText = data.calculation.totalDue;
    })
    .catch(error => console.error('Error fetching data:', error));
