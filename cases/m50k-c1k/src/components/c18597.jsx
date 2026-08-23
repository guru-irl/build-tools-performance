import React from 'react';
const LABEL_18597 = 'component_18597';
export function Component18597({ value = 18597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18597, 'data-value': derived.doubled }, children);
}
export default Component18597;
