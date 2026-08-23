import React from 'react';
const LABEL_38352 = 'component_38352';
export function Component38352({ value = 38352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38352, 'data-value': derived.doubled }, children);
}
export default Component38352;
