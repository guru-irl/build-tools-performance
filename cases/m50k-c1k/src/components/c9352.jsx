import React from 'react';
const LABEL_9352 = 'component_9352';
export function Component9352({ value = 9352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9352, 'data-value': derived.doubled }, children);
}
export default Component9352;
