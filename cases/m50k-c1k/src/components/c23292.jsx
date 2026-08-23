import React from 'react';
const LABEL_23292 = 'component_23292';
export function Component23292({ value = 23292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23292, 'data-value': derived.doubled }, children);
}
export default Component23292;
