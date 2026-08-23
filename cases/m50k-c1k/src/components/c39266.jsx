import React from 'react';
const LABEL_39266 = 'component_39266';
export function Component39266({ value = 39266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39266, 'data-value': derived.doubled }, children);
}
export default Component39266;
