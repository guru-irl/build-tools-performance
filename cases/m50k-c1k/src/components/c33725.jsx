import React from 'react';
const LABEL_33725 = 'component_33725';
export function Component33725({ value = 33725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33725, 'data-value': derived.doubled }, children);
}
export default Component33725;
