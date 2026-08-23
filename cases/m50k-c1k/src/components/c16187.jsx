import React from 'react';
const LABEL_16187 = 'component_16187';
export function Component16187({ value = 16187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16187, 'data-value': derived.doubled }, children);
}
export default Component16187;
