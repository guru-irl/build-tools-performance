import React from 'react';
const LABEL_13757 = 'component_13757';
export function Component13757({ value = 13757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13757, 'data-value': derived.doubled }, children);
}
export default Component13757;
