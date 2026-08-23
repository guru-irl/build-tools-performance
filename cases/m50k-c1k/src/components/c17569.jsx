import React from 'react';
const LABEL_17569 = 'component_17569';
export function Component17569({ value = 17569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17569, 'data-value': derived.doubled }, children);
}
export default Component17569;
