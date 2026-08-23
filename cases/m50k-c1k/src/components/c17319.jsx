import React from 'react';
const LABEL_17319 = 'component_17319';
export function Component17319({ value = 17319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17319, 'data-value': derived.doubled }, children);
}
export default Component17319;
