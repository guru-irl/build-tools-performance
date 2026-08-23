import React from 'react';
const LABEL_44139 = 'component_44139';
export function Component44139({ value = 44139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44139, 'data-value': derived.doubled }, children);
}
export default Component44139;
