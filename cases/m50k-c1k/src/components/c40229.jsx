import React from 'react';
const LABEL_40229 = 'component_40229';
export function Component40229({ value = 40229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40229, 'data-value': derived.doubled }, children);
}
export default Component40229;
