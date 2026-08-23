import React from 'react';
const LABEL_11133 = 'component_11133';
export function Component11133({ value = 11133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11133, 'data-value': derived.doubled }, children);
}
export default Component11133;
