import React from 'react';
const LABEL_3352 = 'component_3352';
export function Component3352({ value = 3352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3352, 'data-value': derived.doubled }, children);
}
export default Component3352;
