# 🚀 Dev Stack Builder

A minimal and interactive **technology stack builder** built with React, TypeScript, and Tailwind CSS.

Choose technologies from different categories and build your own stack. The app also keeps track of the technologies you have selected.

---

## ✨ Features

* 🎨 Clean and minimal UI
* 💻 Interactive technology cards
* ➕ Add technologies to your stack
* 🚫 Disable the **Add to Stack** button after selecting a technology
* 🗑️ Remove technologies from your stack
* 📊 Track the number of selected technologies
* 📭 Empty state when no technologies have been selected
* ⚛️ Built with reusable React components

---

## 🛠️ Technologies Used

| Technology       | Purpose                                       |
| ---------------- | --------------------------------------------- |
| **React**        | Building the user interface                   |
| **TypeScript**   | Type safety and better development experience |
| **Tailwind CSS** | Styling and responsive UI                     |
| **DaisyUI**      | UI components                                 |
| **Vite**         | Development and build tooling                 |

---

## 🧠 What I Learned

This project was built as a practical React learning project. While building it, I practiced several important React concepts.

### JSX

JSX allows you to write HTML-like syntax directly inside JavaScript/TypeScript.

It makes it easier to describe what the UI should look like and allows React components to combine logic and UI in the same place.

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

---

### Props vs State

**Props** are values passed from a parent component to a child component.

They are similar to function arguments.

**State** is data that belongs to a component and can change over time. When state changes, React updates the UI.

```text
Props → Parent → Child

State → Component → UI updates
```

---

### useState

`useState` allows a component to store and update values.

I used `useState` in the **Your Stack** section to:

* Store the technologies selected by the user
* Track the current stack
* Add technologies to the stack
* Remove technologies from the stack
* Update the UI when the stack changes

```tsx
const [stack, setStack] = useState<Technology[]>([]);
```

---

### useEffect

`useEffect` is used to handle side effects in React.

In this project, I used it to load technology data from a local JSON file when the component is rendered.

```tsx
useEffect(() => {
  // Load technology data
}, []);
```

---

### Rendering Lists with `.map()`

React uses `.map()` to render multiple elements from an array.

Each item needs a unique `key` so React can identify which items have changed, been added, or been removed.

```tsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
));
```

---

### Conditional Rendering

Conditional rendering means displaying different UI based on a condition.

I used conditional rendering in the **Your Stack** section.

When the stack is empty, the app displays an empty-state message. When technologies are added, the selected technologies are displayed instead.

I also use conditional logic to change the **Add to Stack** button into a disabled state after a technology has been selected.

```tsx
{stack.length === 0 ? (
  <EmptyStack />
) : (
  <StackList stack={stack} />
)}
```

---

### Parent → Child Data Flow

React follows a **one-way data flow**.

A parent component can pass data to a child component through props.

If a child needs to trigger a change in the parent, the parent can pass a function as a prop. The child then calls that function.

```text
Parent
  ↓ props
Child
  ↓ callback function
Parent
```

This pattern was useful in this project for handling technology selection and updating the user's stack.

---

## 📸 Preview

> Add a screenshot or GIF of your project here.

```md
![Dev Stack Builder Preview](./src/assets/preview.png)
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/dev-stack-builder.git
```

### 2. Navigate into the project

```bash
cd dev-stack-builder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL provided by Vite.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── TechnologyCard.tsx
│   ├── TechnologyList.tsx
│   └── YourStack.tsx
│
├── data/
│   └── technologies.json
│
├── types/
│   └── index.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

*The structure above is an example. Update it to match your actual project structure.*

---

## 🎯 Project Goal

The goal of this project was not just to build a UI, but to practice building a small React application using real development patterns.

Through this project, I practiced:

* React components
* JSX
* Props
* State management
* `useState`
* `useEffect`
* Conditional rendering
* List rendering with `.map()`
* Component communication
* TypeScript types
* Fetching/loading JSON data
* Tailwind CSS
* DaisyUI

---

## 🚧 Future Improvements

Some ideas for future versions:

* [ ] Add more technology categories
* [ ] Allow only one technology per category
* [ ] Add stack persistence with `localStorage`
* [ ] Add search/filter functionality
* [ ] Add drag-and-drop stack organization
* [ ] Add stack export functionality
* [ ] Add a shareable stack URL
* [ ] Improve mobile interactions

---

## 👨‍💻 Author

**Ikhlas**

Product Designer → Frontend Developer

This project is part of my journey to become a professional frontend developer.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
