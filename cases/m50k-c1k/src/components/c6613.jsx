import React from 'react';
const LABEL_6613 = 'component_6613';
export function Component6613({ value = 6613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6613, 'data-value': derived.doubled }, children);
}
export default Component6613;
