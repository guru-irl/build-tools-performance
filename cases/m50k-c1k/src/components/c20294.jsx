import React from 'react';
const LABEL_20294 = 'component_20294';
export function Component20294({ value = 20294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20294, 'data-value': derived.doubled }, children);
}
export default Component20294;
