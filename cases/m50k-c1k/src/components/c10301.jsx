import React from 'react';
const LABEL_10301 = 'component_10301';
export function Component10301({ value = 10301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10301, 'data-value': derived.doubled }, children);
}
export default Component10301;
