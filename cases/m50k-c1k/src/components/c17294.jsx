import React from 'react';
const LABEL_17294 = 'component_17294';
export function Component17294({ value = 17294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17294, 'data-value': derived.doubled }, children);
}
export default Component17294;
