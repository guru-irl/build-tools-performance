import React from 'react';
const LABEL_21725 = 'component_21725';
export function Component21725({ value = 21725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21725, 'data-value': derived.doubled }, children);
}
export default Component21725;
