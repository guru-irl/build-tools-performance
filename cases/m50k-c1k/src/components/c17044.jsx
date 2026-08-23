import React from 'react';
const LABEL_17044 = 'component_17044';
export function Component17044({ value = 17044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17044, 'data-value': derived.doubled }, children);
}
export default Component17044;
