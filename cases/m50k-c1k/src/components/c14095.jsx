import React from 'react';
const LABEL_14095 = 'component_14095';
export function Component14095({ value = 14095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14095, 'data-value': derived.doubled }, children);
}
export default Component14095;
