import React from 'react';
const LABEL_37095 = 'component_37095';
export function Component37095({ value = 37095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37095, 'data-value': derived.doubled }, children);
}
export default Component37095;
