import React from 'react';
const LABEL_22968 = 'component_22968';
export function Component22968({ value = 22968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22968, 'data-value': derived.doubled }, children);
}
export default Component22968;
