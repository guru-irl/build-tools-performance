import React from 'react';
const LABEL_14849 = 'component_14849';
export function Component14849({ value = 14849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14849, 'data-value': derived.doubled }, children);
}
export default Component14849;
