import React from 'react';
const LABEL_42131 = 'component_42131';
export function Component42131({ value = 42131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42131, 'data-value': derived.doubled }, children);
}
export default Component42131;
