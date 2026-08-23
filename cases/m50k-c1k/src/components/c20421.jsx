import React from 'react';
const LABEL_20421 = 'component_20421';
export function Component20421({ value = 20421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20421, 'data-value': derived.doubled }, children);
}
export default Component20421;
