import React from 'react';
const LABEL_37154 = 'component_37154';
export function Component37154({ value = 37154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37154, 'data-value': derived.doubled }, children);
}
export default Component37154;
