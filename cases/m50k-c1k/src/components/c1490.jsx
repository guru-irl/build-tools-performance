import React from 'react';
const LABEL_1490 = 'component_1490';
export function Component1490({ value = 1490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1490, 'data-value': derived.doubled }, children);
}
export default Component1490;
