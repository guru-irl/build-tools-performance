import React from 'react';
const LABEL_5654 = 'component_5654';
export function Component5654({ value = 5654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5654, 'data-value': derived.doubled }, children);
}
export default Component5654;
