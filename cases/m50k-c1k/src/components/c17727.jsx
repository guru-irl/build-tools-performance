import React from 'react';
const LABEL_17727 = 'component_17727';
export function Component17727({ value = 17727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17727, 'data-value': derived.doubled }, children);
}
export default Component17727;
