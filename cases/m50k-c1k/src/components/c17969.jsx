import React from 'react';
const LABEL_17969 = 'component_17969';
export function Component17969({ value = 17969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17969, 'data-value': derived.doubled }, children);
}
export default Component17969;
