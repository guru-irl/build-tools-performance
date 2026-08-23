import React from 'react';
const LABEL_411 = 'component_411';
export function Component411({ value = 411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_411, 'data-value': derived.doubled }, children);
}
export default Component411;
