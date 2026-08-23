import React from 'react';
const LABEL_34352 = 'component_34352';
export function Component34352({ value = 34352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34352, 'data-value': derived.doubled }, children);
}
export default Component34352;
