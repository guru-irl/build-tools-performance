import React from 'react';
const LABEL_30032 = 'component_30032';
export function Component30032({ value = 30032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30032, 'data-value': derived.doubled }, children);
}
export default Component30032;
