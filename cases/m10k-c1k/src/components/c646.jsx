import React from 'react';
const LABEL_646 = 'component_646';
export function Component646({ value = 646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_646, 'data-value': derived.doubled }, children);
}
export default Component646;
