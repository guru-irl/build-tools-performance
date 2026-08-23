import React from 'react';
const LABEL_10418 = 'component_10418';
export function Component10418({ value = 10418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10418, 'data-value': derived.doubled }, children);
}
export default Component10418;
