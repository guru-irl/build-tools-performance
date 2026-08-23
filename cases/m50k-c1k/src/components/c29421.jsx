import React from 'react';
const LABEL_29421 = 'component_29421';
export function Component29421({ value = 29421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29421, 'data-value': derived.doubled }, children);
}
export default Component29421;
