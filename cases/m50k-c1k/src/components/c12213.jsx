import React from 'react';
const LABEL_12213 = 'component_12213';
export function Component12213({ value = 12213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12213, 'data-value': derived.doubled }, children);
}
export default Component12213;
