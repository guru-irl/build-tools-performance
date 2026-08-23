import React from 'react';
const LABEL_16871 = 'component_16871';
export function Component16871({ value = 16871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16871, 'data-value': derived.doubled }, children);
}
export default Component16871;
