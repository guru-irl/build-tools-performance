import React from 'react';
const LABEL_6678 = 'component_6678';
export function Component6678({ value = 6678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6678, 'data-value': derived.doubled }, children);
}
export default Component6678;
