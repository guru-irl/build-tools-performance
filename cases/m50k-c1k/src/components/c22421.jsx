import React from 'react';
const LABEL_22421 = 'component_22421';
export function Component22421({ value = 22421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22421, 'data-value': derived.doubled }, children);
}
export default Component22421;
