import React from 'react';
const LABEL_36133 = 'component_36133';
export function Component36133({ value = 36133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36133, 'data-value': derived.doubled }, children);
}
export default Component36133;
