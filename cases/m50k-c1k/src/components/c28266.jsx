import React from 'react';
const LABEL_28266 = 'component_28266';
export function Component28266({ value = 28266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28266, 'data-value': derived.doubled }, children);
}
export default Component28266;
