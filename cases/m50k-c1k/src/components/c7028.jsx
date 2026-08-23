import React from 'react';
const LABEL_7028 = 'component_7028';
export function Component7028({ value = 7028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7028, 'data-value': derived.doubled }, children);
}
export default Component7028;
