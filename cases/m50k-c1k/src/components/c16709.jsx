import React from 'react';
const LABEL_16709 = 'component_16709';
export function Component16709({ value = 16709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16709, 'data-value': derived.doubled }, children);
}
export default Component16709;
