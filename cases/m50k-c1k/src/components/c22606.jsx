import React from 'react';
const LABEL_22606 = 'component_22606';
export function Component22606({ value = 22606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22606, 'data-value': derived.doubled }, children);
}
export default Component22606;
