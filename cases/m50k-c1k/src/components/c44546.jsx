import React from 'react';
const LABEL_44546 = 'component_44546';
export function Component44546({ value = 44546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44546, 'data-value': derived.doubled }, children);
}
export default Component44546;
