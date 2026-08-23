import React from 'react';
const LABEL_32339 = 'component_32339';
export function Component32339({ value = 32339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32339, 'data-value': derived.doubled }, children);
}
export default Component32339;
