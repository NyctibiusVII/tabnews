function status(request, response) {
    response.status(200).json({ hello: 'Olá Deschamps!' })
}

export default status