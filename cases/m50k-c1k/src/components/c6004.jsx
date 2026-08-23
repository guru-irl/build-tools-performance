import React from 'react';
const LABEL_6004 = 'component_6004';
export function Component6004({ value = 6004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6004, 'data-value': derived.doubled }, children);
}
export default Component6004;
