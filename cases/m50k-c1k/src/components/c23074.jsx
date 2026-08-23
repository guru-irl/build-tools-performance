import React from 'react';
const LABEL_23074 = 'component_23074';
export function Component23074({ value = 23074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23074, 'data-value': derived.doubled }, children);
}
export default Component23074;
