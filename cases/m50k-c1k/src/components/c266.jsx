import React from 'react';
const LABEL_266 = 'component_266';
export function Component266({ value = 266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_266, 'data-value': derived.doubled }, children);
}
export default Component266;
