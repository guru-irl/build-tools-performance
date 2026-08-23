import React from 'react';
const LABEL_8095 = 'component_8095';
export function Component8095({ value = 8095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8095, 'data-value': derived.doubled }, children);
}
export default Component8095;
