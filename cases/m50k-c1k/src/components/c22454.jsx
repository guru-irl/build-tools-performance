import React from 'react';
const LABEL_22454 = 'component_22454';
export function Component22454({ value = 22454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22454, 'data-value': derived.doubled }, children);
}
export default Component22454;
