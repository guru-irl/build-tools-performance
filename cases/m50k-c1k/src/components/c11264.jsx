import React from 'react';
const LABEL_11264 = 'component_11264';
export function Component11264({ value = 11264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11264, 'data-value': derived.doubled }, children);
}
export default Component11264;
