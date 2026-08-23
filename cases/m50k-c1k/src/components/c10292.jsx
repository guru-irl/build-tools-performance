import React from 'react';
const LABEL_10292 = 'component_10292';
export function Component10292({ value = 10292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10292, 'data-value': derived.doubled }, children);
}
export default Component10292;
