import React from 'react';
const LABEL_19063 = 'component_19063';
export function Component19063({ value = 19063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19063, 'data-value': derived.doubled }, children);
}
export default Component19063;
