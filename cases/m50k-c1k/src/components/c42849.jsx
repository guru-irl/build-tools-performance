import React from 'react';
const LABEL_42849 = 'component_42849';
export function Component42849({ value = 42849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42849, 'data-value': derived.doubled }, children);
}
export default Component42849;
