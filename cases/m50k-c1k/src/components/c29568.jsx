import React from 'react';
const LABEL_29568 = 'component_29568';
export function Component29568({ value = 29568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29568, 'data-value': derived.doubled }, children);
}
export default Component29568;
