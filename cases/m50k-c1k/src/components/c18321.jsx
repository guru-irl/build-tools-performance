import React from 'react';
const LABEL_18321 = 'component_18321';
export function Component18321({ value = 18321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18321, 'data-value': derived.doubled }, children);
}
export default Component18321;
