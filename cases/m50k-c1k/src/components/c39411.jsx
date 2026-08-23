import React from 'react';
const LABEL_39411 = 'component_39411';
export function Component39411({ value = 39411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39411, 'data-value': derived.doubled }, children);
}
export default Component39411;
