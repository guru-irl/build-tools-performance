import React from 'react';
const LABEL_7266 = 'component_7266';
export function Component7266({ value = 7266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7266, 'data-value': derived.doubled }, children);
}
export default Component7266;
