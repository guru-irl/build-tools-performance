import React from 'react';
const LABEL_17890 = 'component_17890';
export function Component17890({ value = 17890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17890, 'data-value': derived.doubled }, children);
}
export default Component17890;
