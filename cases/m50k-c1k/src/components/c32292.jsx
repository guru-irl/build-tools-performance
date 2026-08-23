import React from 'react';
const LABEL_32292 = 'component_32292';
export function Component32292({ value = 32292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32292, 'data-value': derived.doubled }, children);
}
export default Component32292;
