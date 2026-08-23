import React from 'react';
const LABEL_44704 = 'component_44704';
export function Component44704({ value = 44704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44704, 'data-value': derived.doubled }, children);
}
export default Component44704;
