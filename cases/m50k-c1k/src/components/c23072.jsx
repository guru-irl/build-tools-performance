import React from 'react';
const LABEL_23072 = 'component_23072';
export function Component23072({ value = 23072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23072, 'data-value': derived.doubled }, children);
}
export default Component23072;
