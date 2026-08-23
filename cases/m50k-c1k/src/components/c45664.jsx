import React from 'react';
const LABEL_45664 = 'component_45664';
export function Component45664({ value = 45664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45664, 'data-value': derived.doubled }, children);
}
export default Component45664;
