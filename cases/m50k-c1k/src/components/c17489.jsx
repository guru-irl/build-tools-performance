import React from 'react';
const LABEL_17489 = 'component_17489';
export function Component17489({ value = 17489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17489, 'data-value': derived.doubled }, children);
}
export default Component17489;
