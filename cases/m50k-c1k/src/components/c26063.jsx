import React from 'react';
const LABEL_26063 = 'component_26063';
export function Component26063({ value = 26063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26063, 'data-value': derived.doubled }, children);
}
export default Component26063;
