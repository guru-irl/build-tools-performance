import React from 'react';
const LABEL_37411 = 'component_37411';
export function Component37411({ value = 37411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37411, 'data-value': derived.doubled }, children);
}
export default Component37411;
