import React from 'react';
const LABEL_4292 = 'component_4292';
export function Component4292({ value = 4292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4292, 'data-value': derived.doubled }, children);
}
export default Component4292;
