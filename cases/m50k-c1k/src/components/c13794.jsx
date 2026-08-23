import React from 'react';
const LABEL_13794 = 'component_13794';
export function Component13794({ value = 13794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13794, 'data-value': derived.doubled }, children);
}
export default Component13794;
