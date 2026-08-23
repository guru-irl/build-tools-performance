import React from 'react';
const LABEL_14208 = 'component_14208';
export function Component14208({ value = 14208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14208, 'data-value': derived.doubled }, children);
}
export default Component14208;
