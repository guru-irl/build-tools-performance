import React from 'react';
const LABEL_42266 = 'component_42266';
export function Component42266({ value = 42266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42266, 'data-value': derived.doubled }, children);
}
export default Component42266;
