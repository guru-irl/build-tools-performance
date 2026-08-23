import React from 'react';
const LABEL_43731 = 'component_43731';
export function Component43731({ value = 43731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43731, 'data-value': derived.doubled }, children);
}
export default Component43731;
