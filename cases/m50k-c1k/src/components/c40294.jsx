import React from 'react';
const LABEL_40294 = 'component_40294';
export function Component40294({ value = 40294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40294, 'data-value': derived.doubled }, children);
}
export default Component40294;
