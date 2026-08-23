import React from 'react';
const LABEL_6028 = 'component_6028';
export function Component6028({ value = 6028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6028, 'data-value': derived.doubled }, children);
}
export default Component6028;
