import React from 'react';
const LABEL_32221 = 'component_32221';
export function Component32221({ value = 32221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32221, 'data-value': derived.doubled }, children);
}
export default Component32221;
