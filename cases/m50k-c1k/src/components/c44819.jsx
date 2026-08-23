import React from 'react';
const LABEL_44819 = 'component_44819';
export function Component44819({ value = 44819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44819, 'data-value': derived.doubled }, children);
}
export default Component44819;
