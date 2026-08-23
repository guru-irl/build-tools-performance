import React from 'react';
const LABEL_10896 = 'component_10896';
export function Component10896({ value = 10896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10896, 'data-value': derived.doubled }, children);
}
export default Component10896;
