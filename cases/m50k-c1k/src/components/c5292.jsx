import React from 'react';
const LABEL_5292 = 'component_5292';
export function Component5292({ value = 5292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5292, 'data-value': derived.doubled }, children);
}
export default Component5292;
