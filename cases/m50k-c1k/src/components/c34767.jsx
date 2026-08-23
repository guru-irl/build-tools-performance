import React from 'react';
const LABEL_34767 = 'component_34767';
export function Component34767({ value = 34767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34767, 'data-value': derived.doubled }, children);
}
export default Component34767;
