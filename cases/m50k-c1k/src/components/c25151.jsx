import React from 'react';
const LABEL_25151 = 'component_25151';
export function Component25151({ value = 25151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25151, 'data-value': derived.doubled }, children);
}
export default Component25151;
