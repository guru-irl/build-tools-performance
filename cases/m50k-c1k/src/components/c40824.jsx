import React from 'react';
const LABEL_40824 = 'component_40824';
export function Component40824({ value = 40824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40824, 'data-value': derived.doubled }, children);
}
export default Component40824;
