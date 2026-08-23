import React from 'react';
const LABEL_6411 = 'component_6411';
export function Component6411({ value = 6411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6411, 'data-value': derived.doubled }, children);
}
export default Component6411;
