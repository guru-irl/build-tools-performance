import React from 'react';
const LABEL_16613 = 'component_16613';
export function Component16613({ value = 16613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16613, 'data-value': derived.doubled }, children);
}
export default Component16613;
