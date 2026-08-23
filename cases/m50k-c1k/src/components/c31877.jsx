import React from 'react';
const LABEL_31877 = 'component_31877';
export function Component31877({ value = 31877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31877, 'data-value': derived.doubled }, children);
}
export default Component31877;
