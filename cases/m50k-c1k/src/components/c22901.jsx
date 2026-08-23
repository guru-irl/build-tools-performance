import React from 'react';
const LABEL_22901 = 'component_22901';
export function Component22901({ value = 22901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22901, 'data-value': derived.doubled }, children);
}
export default Component22901;
