import React from 'react';
const LABEL_43454 = 'component_43454';
export function Component43454({ value = 43454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43454, 'data-value': derived.doubled }, children);
}
export default Component43454;
