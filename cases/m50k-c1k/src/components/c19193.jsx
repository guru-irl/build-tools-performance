import React from 'react';
const LABEL_19193 = 'component_19193';
export function Component19193({ value = 19193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19193, 'data-value': derived.doubled }, children);
}
export default Component19193;
