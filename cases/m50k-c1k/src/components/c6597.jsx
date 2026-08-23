import React from 'react';
const LABEL_6597 = 'component_6597';
export function Component6597({ value = 6597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6597, 'data-value': derived.doubled }, children);
}
export default Component6597;
