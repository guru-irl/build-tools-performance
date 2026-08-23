import React from 'react';
const LABEL_17978 = 'component_17978';
export function Component17978({ value = 17978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17978, 'data-value': derived.doubled }, children);
}
export default Component17978;
