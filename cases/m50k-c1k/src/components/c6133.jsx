import React from 'react';
const LABEL_6133 = 'component_6133';
export function Component6133({ value = 6133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6133, 'data-value': derived.doubled }, children);
}
export default Component6133;
