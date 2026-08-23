import React from 'react';
const LABEL_7362 = 'component_7362';
export function Component7362({ value = 7362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7362, 'data-value': derived.doubled }, children);
}
export default Component7362;
