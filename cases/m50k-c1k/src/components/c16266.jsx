import React from 'react';
const LABEL_16266 = 'component_16266';
export function Component16266({ value = 16266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16266, 'data-value': derived.doubled }, children);
}
export default Component16266;
