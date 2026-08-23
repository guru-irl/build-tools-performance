import React from 'react';
const LABEL_44334 = 'component_44334';
export function Component44334({ value = 44334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44334, 'data-value': derived.doubled }, children);
}
export default Component44334;
