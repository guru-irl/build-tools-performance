import React from 'react';
const LABEL_7213 = 'component_7213';
export function Component7213({ value = 7213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7213, 'data-value': derived.doubled }, children);
}
export default Component7213;
