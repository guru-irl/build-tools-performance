import React from 'react';
const LABEL_14122 = 'component_14122';
export function Component14122({ value = 14122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14122, 'data-value': derived.doubled }, children);
}
export default Component14122;
