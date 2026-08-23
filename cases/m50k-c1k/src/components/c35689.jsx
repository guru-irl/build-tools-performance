import React from 'react';
const LABEL_35689 = 'component_35689';
export function Component35689({ value = 35689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35689, 'data-value': derived.doubled }, children);
}
export default Component35689;
