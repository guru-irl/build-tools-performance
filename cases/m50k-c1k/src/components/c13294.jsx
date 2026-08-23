import React from 'react';
const LABEL_13294 = 'component_13294';
export function Component13294({ value = 13294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13294, 'data-value': derived.doubled }, children);
}
export default Component13294;
