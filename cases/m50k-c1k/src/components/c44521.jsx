import React from 'react';
const LABEL_44521 = 'component_44521';
export function Component44521({ value = 44521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44521, 'data-value': derived.doubled }, children);
}
export default Component44521;
