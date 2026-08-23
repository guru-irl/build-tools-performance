import React from 'react';
const LABEL_44608 = 'component_44608';
export function Component44608({ value = 44608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44608, 'data-value': derived.doubled }, children);
}
export default Component44608;
