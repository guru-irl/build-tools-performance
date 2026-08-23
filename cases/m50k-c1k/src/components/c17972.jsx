import React from 'react';
const LABEL_17972 = 'component_17972';
export function Component17972({ value = 17972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17972, 'data-value': derived.doubled }, children);
}
export default Component17972;
