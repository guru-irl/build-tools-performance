import React from 'react';
const LABEL_42747 = 'component_42747';
export function Component42747({ value = 42747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42747, 'data-value': derived.doubled }, children);
}
export default Component42747;
