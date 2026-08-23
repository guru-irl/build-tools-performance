import React from 'react';
const LABEL_42615 = 'component_42615';
export function Component42615({ value = 42615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42615, 'data-value': derived.doubled }, children);
}
export default Component42615;
