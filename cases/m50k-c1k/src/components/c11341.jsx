import React from 'react';
const LABEL_11341 = 'component_11341';
export function Component11341({ value = 11341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11341, 'data-value': derived.doubled }, children);
}
export default Component11341;
