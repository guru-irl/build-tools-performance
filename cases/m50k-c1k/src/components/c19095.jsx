import React from 'react';
const LABEL_19095 = 'component_19095';
export function Component19095({ value = 19095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19095, 'data-value': derived.doubled }, children);
}
export default Component19095;
