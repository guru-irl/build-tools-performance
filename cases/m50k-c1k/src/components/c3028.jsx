import React from 'react';
const LABEL_3028 = 'component_3028';
export function Component3028({ value = 3028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3028, 'data-value': derived.doubled }, children);
}
export default Component3028;
