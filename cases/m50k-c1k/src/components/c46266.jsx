import React from 'react';
const LABEL_46266 = 'component_46266';
export function Component46266({ value = 46266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46266, 'data-value': derived.doubled }, children);
}
export default Component46266;
