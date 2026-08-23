import React from 'react';
const LABEL_23240 = 'component_23240';
export function Component23240({ value = 23240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23240, 'data-value': derived.doubled }, children);
}
export default Component23240;
