import React from 'react';
const LABEL_7095 = 'component_7095';
export function Component7095({ value = 7095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7095, 'data-value': derived.doubled }, children);
}
export default Component7095;
