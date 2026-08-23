import React from 'react';
const LABEL_34266 = 'component_34266';
export function Component34266({ value = 34266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34266, 'data-value': derived.doubled }, children);
}
export default Component34266;
