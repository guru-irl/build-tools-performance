import React from 'react';
const LABEL_42817 = 'component_42817';
export function Component42817({ value = 42817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42817, 'data-value': derived.doubled }, children);
}
export default Component42817;
