import React from 'react';
const LABEL_23353 = 'component_23353';
export function Component23353({ value = 23353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23353, 'data-value': derived.doubled }, children);
}
export default Component23353;
