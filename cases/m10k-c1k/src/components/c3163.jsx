import React from 'react';
const LABEL_3163 = 'component_3163';
export function Component3163({ value = 3163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3163, 'data-value': derived.doubled }, children);
}
export default Component3163;
