import React from 'react';
const LABEL_3319 = 'component_3319';
export function Component3319({ value = 3319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3319, 'data-value': derived.doubled }, children);
}
export default Component3319;
