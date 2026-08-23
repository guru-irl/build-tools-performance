import React from 'react';
const LABEL_10149 = 'component_10149';
export function Component10149({ value = 10149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10149, 'data-value': derived.doubled }, children);
}
export default Component10149;
