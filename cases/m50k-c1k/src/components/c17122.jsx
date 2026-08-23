import React from 'react';
const LABEL_17122 = 'component_17122';
export function Component17122({ value = 17122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17122, 'data-value': derived.doubled }, children);
}
export default Component17122;
