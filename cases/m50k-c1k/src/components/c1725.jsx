import React from 'react';
const LABEL_1725 = 'component_1725';
export function Component1725({ value = 1725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1725, 'data-value': derived.doubled }, children);
}
export default Component1725;
