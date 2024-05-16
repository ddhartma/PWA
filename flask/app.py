from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

todos = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/todos', methods=['GET'])
def get_todos():
    return jsonify(todos)

@app.route('/api/todos', methods=['POST'])
def add_todo():
    todo = request.json
    todos.append(todo)
    return jsonify({"message": "Todo added successfully"})

@app.route('/api/todos/<int:index>', methods=['PUT'])
def update_todo(index):
    todo = request.json
    todos[index] = todo
    return jsonify({"message": "Todo updated successfully"})

@app.route('/api/todos/<int:index>', methods=['DELETE'])
def delete_todo(index):
    del todos[index]
    return jsonify({"message": "Todo deleted successfully"})

if __name__ == '__main__':
    app.run(debug=True)