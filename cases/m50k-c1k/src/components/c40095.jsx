import React from 'react';
const LABEL_40095 = 'component_40095';
export function Component40095({ value = 40095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40095, 'data-value': derived.doubled }, children);
}
export default Component40095;
