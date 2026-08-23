import React from 'react';
const LABEL_21007 = 'component_21007';
export function Component21007({ value = 21007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21007, 'data-value': derived.doubled }, children);
}
export default Component21007;
