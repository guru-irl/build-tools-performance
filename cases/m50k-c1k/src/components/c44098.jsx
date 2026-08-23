import React from 'react';
const LABEL_44098 = 'component_44098';
export function Component44098({ value = 44098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44098, 'data-value': derived.doubled }, children);
}
export default Component44098;
