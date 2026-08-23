import React from 'react';
const LABEL_28163 = 'component_28163';
export function Component28163({ value = 28163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28163, 'data-value': derived.doubled }, children);
}
export default Component28163;
