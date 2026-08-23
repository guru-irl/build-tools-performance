import React from 'react';
const LABEL_5838 = 'component_5838';
export function Component5838({ value = 5838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5838, 'data-value': derived.doubled }, children);
}
export default Component5838;
