import React from 'react';
const LABEL_30137 = 'component_30137';
export function Component30137({ value = 30137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30137, 'data-value': derived.doubled }, children);
}
export default Component30137;
