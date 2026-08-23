import React from 'react';
const LABEL_7800 = 'component_7800';
export function Component7800({ value = 7800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7800, 'data-value': derived.doubled }, children);
}
export default Component7800;
