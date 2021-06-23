module.exports ={
    commands: ['purge'],
    permissions: 'MANAGE_MESSAGES',
    permissionErrors: 'You do not have permission to do this command.',
    description: 'Deletes messages',
    callback: (message, args) => {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.channel.send('Please enter the amount of messages you want to purge.')
        } else if(amount <= 1 || amount > 501) {
            return message.channel.send('You can only delete up to 500 Messages.')
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('There was an error deleting messages in this channel.')
        })
    }
}