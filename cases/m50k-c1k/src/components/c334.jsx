import React from 'react';
const LABEL_334 = 'component_334';
export function Component334({ value = 334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_334, 'data-value': derived.doubled }, children);
}
export default Component334;
