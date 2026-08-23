import React from 'react';
const LABEL_14292 = 'component_14292';
export function Component14292({ value = 14292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14292, 'data-value': derived.doubled }, children);
}
export default Component14292;
