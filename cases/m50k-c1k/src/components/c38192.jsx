import React from 'react';
const LABEL_38192 = 'component_38192';
export function Component38192({ value = 38192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38192, 'data-value': derived.doubled }, children);
}
export default Component38192;
