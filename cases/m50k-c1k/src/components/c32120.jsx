import React from 'react';
const LABEL_32120 = 'component_32120';
export function Component32120({ value = 32120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32120, 'data-value': derived.doubled }, children);
}
export default Component32120;
