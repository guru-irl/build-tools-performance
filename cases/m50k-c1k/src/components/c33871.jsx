import React from 'react';
const LABEL_33871 = 'component_33871';
export function Component33871({ value = 33871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33871, 'data-value': derived.doubled }, children);
}
export default Component33871;
