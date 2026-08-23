import React from 'react';
const LABEL_33597 = 'component_33597';
export function Component33597({ value = 33597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33597, 'data-value': derived.doubled }, children);
}
export default Component33597;
