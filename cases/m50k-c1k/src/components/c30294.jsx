import React from 'react';
const LABEL_30294 = 'component_30294';
export function Component30294({ value = 30294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30294, 'data-value': derived.doubled }, children);
}
export default Component30294;
