import React from 'react';
const LABEL_23028 = 'component_23028';
export function Component23028({ value = 23028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23028, 'data-value': derived.doubled }, children);
}
export default Component23028;
