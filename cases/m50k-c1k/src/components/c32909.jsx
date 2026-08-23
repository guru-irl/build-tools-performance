import React from 'react';
const LABEL_32909 = 'component_32909';
export function Component32909({ value = 32909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32909, 'data-value': derived.doubled }, children);
}
export default Component32909;
