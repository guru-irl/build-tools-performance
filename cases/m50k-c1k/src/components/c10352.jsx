import React from 'react';
const LABEL_10352 = 'component_10352';
export function Component10352({ value = 10352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10352, 'data-value': derived.doubled }, children);
}
export default Component10352;
