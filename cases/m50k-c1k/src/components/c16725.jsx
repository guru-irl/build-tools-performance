import React from 'react';
const LABEL_16725 = 'component_16725';
export function Component16725({ value = 16725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16725, 'data-value': derived.doubled }, children);
}
export default Component16725;
