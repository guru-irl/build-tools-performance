import React from 'react';
const LABEL_11597 = 'component_11597';
export function Component11597({ value = 11597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11597, 'data-value': derived.doubled }, children);
}
export default Component11597;
