import React from 'react';
const LABEL_38152 = 'component_38152';
export function Component38152({ value = 38152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38152, 'data-value': derived.doubled }, children);
}
export default Component38152;
