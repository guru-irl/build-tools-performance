import React from 'react';
const LABEL_23274 = 'component_23274';
export function Component23274({ value = 23274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23274, 'data-value': derived.doubled }, children);
}
export default Component23274;
