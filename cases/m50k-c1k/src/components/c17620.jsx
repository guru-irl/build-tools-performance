import React from 'react';
const LABEL_17620 = 'component_17620';
export function Component17620({ value = 17620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17620, 'data-value': derived.doubled }, children);
}
export default Component17620;
