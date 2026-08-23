import React from 'react';
const LABEL_13154 = 'component_13154';
export function Component13154({ value = 13154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13154, 'data-value': derived.doubled }, children);
}
export default Component13154;
