import React from 'react';
const LABEL_3725 = 'component_3725';
export function Component3725({ value = 3725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3725, 'data-value': derived.doubled }, children);
}
export default Component3725;
