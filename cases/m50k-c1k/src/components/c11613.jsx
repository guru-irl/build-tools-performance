import React from 'react';
const LABEL_11613 = 'component_11613';
export function Component11613({ value = 11613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11613, 'data-value': derived.doubled }, children);
}
export default Component11613;
