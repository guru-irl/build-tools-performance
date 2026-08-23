import React from 'react';
const LABEL_8194 = 'component_8194';
export function Component8194({ value = 8194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8194, 'data-value': derived.doubled }, children);
}
export default Component8194;
