import React from 'react';
const LABEL_34709 = 'component_34709';
export function Component34709({ value = 34709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34709, 'data-value': derived.doubled }, children);
}
export default Component34709;
