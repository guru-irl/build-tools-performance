import React from 'react';
const LABEL_17155 = 'component_17155';
export function Component17155({ value = 17155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17155, 'data-value': derived.doubled }, children);
}
export default Component17155;
