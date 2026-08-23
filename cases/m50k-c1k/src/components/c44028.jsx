import React from 'react';
const LABEL_44028 = 'component_44028';
export function Component44028({ value = 44028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44028, 'data-value': derived.doubled }, children);
}
export default Component44028;
