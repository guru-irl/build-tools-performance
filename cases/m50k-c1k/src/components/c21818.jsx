import React from 'react';
const LABEL_21818 = 'component_21818';
export function Component21818({ value = 21818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21818, 'data-value': derived.doubled }, children);
}
export default Component21818;
