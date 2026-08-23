import React from 'react';
const LABEL_10139 = 'component_10139';
export function Component10139({ value = 10139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10139, 'data-value': derived.doubled }, children);
}
export default Component10139;
