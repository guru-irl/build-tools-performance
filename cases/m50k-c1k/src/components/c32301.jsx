import React from 'react';
const LABEL_32301 = 'component_32301';
export function Component32301({ value = 32301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32301, 'data-value': derived.doubled }, children);
}
export default Component32301;
