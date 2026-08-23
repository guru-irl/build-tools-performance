import React from 'react';
const LABEL_14151 = 'component_14151';
export function Component14151({ value = 14151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14151, 'data-value': derived.doubled }, children);
}
export default Component14151;
