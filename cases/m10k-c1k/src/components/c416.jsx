import React from 'react';
const LABEL_416 = 'component_416';
export function Component416({ value = 416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_416, 'data-value': derived.doubled }, children);
}
export default Component416;
