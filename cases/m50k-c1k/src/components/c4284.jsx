import React from 'react';
const LABEL_4284 = 'component_4284';
export function Component4284({ value = 4284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4284, 'data-value': derived.doubled }, children);
}
export default Component4284;
