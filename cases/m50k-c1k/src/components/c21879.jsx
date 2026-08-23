import React from 'react';
const LABEL_21879 = 'component_21879';
export function Component21879({ value = 21879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21879, 'data-value': derived.doubled }, children);
}
export default Component21879;
