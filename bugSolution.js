```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Empty dependency array only runs on mount
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```