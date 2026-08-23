import React from 'react';
const LABEL_35709 = 'component_35709';
export function Component35709({ value = 35709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35709, 'data-value': derived.doubled }, children);
}
export default Component35709;
