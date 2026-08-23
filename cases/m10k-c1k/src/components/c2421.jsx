import React from 'react';
const LABEL_2421 = 'component_2421';
export function Component2421({ value = 2421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2421, 'data-value': derived.doubled }, children);
}
export default Component2421;
