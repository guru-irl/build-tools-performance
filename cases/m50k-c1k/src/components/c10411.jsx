import React from 'react';
const LABEL_10411 = 'component_10411';
export function Component10411({ value = 10411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10411, 'data-value': derived.doubled }, children);
}
export default Component10411;
