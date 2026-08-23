import React from 'react';
const LABEL_28743 = 'component_28743';
export function Component28743({ value = 28743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28743, 'data-value': derived.doubled }, children);
}
export default Component28743;
