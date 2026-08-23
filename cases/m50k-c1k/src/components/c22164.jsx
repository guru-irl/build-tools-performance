import React from 'react';
const LABEL_22164 = 'component_22164';
export function Component22164({ value = 22164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22164, 'data-value': derived.doubled }, children);
}
export default Component22164;
