import React from 'react';
const LABEL_32933 = 'component_32933';
export function Component32933({ value = 32933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32933, 'data-value': derived.doubled }, children);
}
export default Component32933;
