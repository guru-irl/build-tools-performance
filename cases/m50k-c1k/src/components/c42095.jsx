import React from 'react';
const LABEL_42095 = 'component_42095';
export function Component42095({ value = 42095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42095, 'data-value': derived.doubled }, children);
}
export default Component42095;
