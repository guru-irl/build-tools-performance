import React from 'react';
const LABEL_10596 = 'component_10596';
export function Component10596({ value = 10596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10596, 'data-value': derived.doubled }, children);
}
export default Component10596;
