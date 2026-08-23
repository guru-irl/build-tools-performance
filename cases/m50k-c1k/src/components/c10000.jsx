import React from 'react';
const LABEL_10000 = 'component_10000';
export function Component10000({ value = 10000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10000, 'data-value': derived.doubled }, children);
}
export default Component10000;
