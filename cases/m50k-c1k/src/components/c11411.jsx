import React from 'react';
const LABEL_11411 = 'component_11411';
export function Component11411({ value = 11411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11411, 'data-value': derived.doubled }, children);
}
export default Component11411;
