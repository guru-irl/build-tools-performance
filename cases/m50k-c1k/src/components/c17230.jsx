import React from 'react';
const LABEL_17230 = 'component_17230';
export function Component17230({ value = 17230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17230, 'data-value': derived.doubled }, children);
}
export default Component17230;
