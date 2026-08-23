import React from 'react';
const LABEL_17 = 'component_17';
export function Component17({ value = 17, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17, 'data-value': derived.doubled }, children);
}
export default Component17;
