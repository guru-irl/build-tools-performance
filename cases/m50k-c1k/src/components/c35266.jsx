import React from 'react';
const LABEL_35266 = 'component_35266';
export function Component35266({ value = 35266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35266, 'data-value': derived.doubled }, children);
}
export default Component35266;
