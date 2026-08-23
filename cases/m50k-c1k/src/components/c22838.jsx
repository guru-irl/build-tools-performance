import React from 'react';
const LABEL_22838 = 'component_22838';
export function Component22838({ value = 22838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22838, 'data-value': derived.doubled }, children);
}
export default Component22838;
