import React from 'react';
const LABEL_34213 = 'component_34213';
export function Component34213({ value = 34213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34213, 'data-value': derived.doubled }, children);
}
export default Component34213;
