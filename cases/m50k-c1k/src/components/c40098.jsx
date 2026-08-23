import React from 'react';
const LABEL_40098 = 'component_40098';
export function Component40098({ value = 40098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40098, 'data-value': derived.doubled }, children);
}
export default Component40098;
