import React from 'react';
const LABEL_17571 = 'component_17571';
export function Component17571({ value = 17571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17571, 'data-value': derived.doubled }, children);
}
export default Component17571;
