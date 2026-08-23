import React from 'react';
const LABEL_21803 = 'component_21803';
export function Component21803({ value = 21803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21803, 'data-value': derived.doubled }, children);
}
export default Component21803;
