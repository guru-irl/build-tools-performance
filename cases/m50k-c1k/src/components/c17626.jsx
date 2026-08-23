import React from 'react';
const LABEL_17626 = 'component_17626';
export function Component17626({ value = 17626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17626, 'data-value': derived.doubled }, children);
}
export default Component17626;
