import React from 'react';
const LABEL_37943 = 'component_37943';
export function Component37943({ value = 37943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37943, 'data-value': derived.doubled }, children);
}
export default Component37943;
