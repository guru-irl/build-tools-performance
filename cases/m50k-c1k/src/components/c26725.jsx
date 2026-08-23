import React from 'react';
const LABEL_26725 = 'component_26725';
export function Component26725({ value = 26725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26725, 'data-value': derived.doubled }, children);
}
export default Component26725;
