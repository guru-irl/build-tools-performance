import React from 'react';
const LABEL_2786 = 'component_2786';
export function Component2786({ value = 2786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2786, 'data-value': derived.doubled }, children);
}
export default Component2786;
