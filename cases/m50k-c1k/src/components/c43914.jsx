import React from 'react';
const LABEL_43914 = 'component_43914';
export function Component43914({ value = 43914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43914, 'data-value': derived.doubled }, children);
}
export default Component43914;
