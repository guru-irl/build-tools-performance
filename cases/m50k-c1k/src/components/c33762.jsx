import React from 'react';
const LABEL_33762 = 'component_33762';
export function Component33762({ value = 33762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33762, 'data-value': derived.doubled }, children);
}
export default Component33762;
