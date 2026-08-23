import React from 'react';
const LABEL_33430 = 'component_33430';
export function Component33430({ value = 33430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33430, 'data-value': derived.doubled }, children);
}
export default Component33430;
