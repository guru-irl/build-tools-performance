import React from 'react';
const LABEL_6375 = 'component_6375';
export function Component6375({ value = 6375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6375, 'data-value': derived.doubled }, children);
}
export default Component6375;
