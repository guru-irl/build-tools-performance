import React from 'react';
const LABEL_22490 = 'component_22490';
export function Component22490({ value = 22490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22490, 'data-value': derived.doubled }, children);
}
export default Component22490;
