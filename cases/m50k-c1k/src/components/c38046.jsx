import React from 'react';
const LABEL_38046 = 'component_38046';
export function Component38046({ value = 38046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38046, 'data-value': derived.doubled }, children);
}
export default Component38046;
