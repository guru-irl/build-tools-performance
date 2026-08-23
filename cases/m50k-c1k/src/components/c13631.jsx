import React from 'react';
const LABEL_13631 = 'component_13631';
export function Component13631({ value = 13631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13631, 'data-value': derived.doubled }, children);
}
export default Component13631;
