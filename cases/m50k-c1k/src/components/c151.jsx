import React from 'react';
const LABEL_151 = 'component_151';
export function Component151({ value = 151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_151, 'data-value': derived.doubled }, children);
}
export default Component151;
