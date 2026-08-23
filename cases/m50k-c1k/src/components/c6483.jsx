import React from 'react';
const LABEL_6483 = 'component_6483';
export function Component6483({ value = 6483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6483, 'data-value': derived.doubled }, children);
}
export default Component6483;
