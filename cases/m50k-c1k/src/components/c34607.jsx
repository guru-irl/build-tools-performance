import React from 'react';
const LABEL_34607 = 'component_34607';
export function Component34607({ value = 34607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34607, 'data-value': derived.doubled }, children);
}
export default Component34607;
