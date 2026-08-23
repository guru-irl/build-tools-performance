import React from 'react';
const LABEL_18725 = 'component_18725';
export function Component18725({ value = 18725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18725, 'data-value': derived.doubled }, children);
}
export default Component18725;
