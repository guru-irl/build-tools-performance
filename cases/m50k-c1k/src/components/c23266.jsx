import React from 'react';
const LABEL_23266 = 'component_23266';
export function Component23266({ value = 23266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23266, 'data-value': derived.doubled }, children);
}
export default Component23266;
