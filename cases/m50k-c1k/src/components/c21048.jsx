import React from 'react';
const LABEL_21048 = 'component_21048';
export function Component21048({ value = 21048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21048, 'data-value': derived.doubled }, children);
}
export default Component21048;
