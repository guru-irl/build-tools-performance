import React from 'react';
const LABEL_34590 = 'component_34590';
export function Component34590({ value = 34590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34590, 'data-value': derived.doubled }, children);
}
export default Component34590;
