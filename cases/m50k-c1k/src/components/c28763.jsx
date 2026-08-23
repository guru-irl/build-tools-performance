import React from 'react';
const LABEL_28763 = 'component_28763';
export function Component28763({ value = 28763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28763, 'data-value': derived.doubled }, children);
}
export default Component28763;
