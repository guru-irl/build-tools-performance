import React from 'react';
const LABEL_44616 = 'component_44616';
export function Component44616({ value = 44616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44616, 'data-value': derived.doubled }, children);
}
export default Component44616;
