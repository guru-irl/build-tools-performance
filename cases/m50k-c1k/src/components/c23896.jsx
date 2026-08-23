import React from 'react';
const LABEL_23896 = 'component_23896';
export function Component23896({ value = 23896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23896, 'data-value': derived.doubled }, children);
}
export default Component23896;
