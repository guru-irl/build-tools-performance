import React from 'react';
const LABEL_17655 = 'component_17655';
export function Component17655({ value = 17655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17655, 'data-value': derived.doubled }, children);
}
export default Component17655;
