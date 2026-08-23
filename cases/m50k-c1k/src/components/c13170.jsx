import React from 'react';
const LABEL_13170 = 'component_13170';
export function Component13170({ value = 13170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13170, 'data-value': derived.doubled }, children);
}
export default Component13170;
