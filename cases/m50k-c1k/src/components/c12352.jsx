import React from 'react';
const LABEL_12352 = 'component_12352';
export function Component12352({ value = 12352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12352, 'data-value': derived.doubled }, children);
}
export default Component12352;
