import React from 'react';
const LABEL_32095 = 'component_32095';
export function Component32095({ value = 32095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32095, 'data-value': derived.doubled }, children);
}
export default Component32095;
