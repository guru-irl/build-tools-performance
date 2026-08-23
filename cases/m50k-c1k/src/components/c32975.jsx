import React from 'react';
const LABEL_32975 = 'component_32975';
export function Component32975({ value = 32975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32975, 'data-value': derived.doubled }, children);
}
export default Component32975;
