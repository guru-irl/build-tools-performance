import React from 'react';
const LABEL_33361 = 'component_33361';
export function Component33361({ value = 33361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33361, 'data-value': derived.doubled }, children);
}
export default Component33361;
