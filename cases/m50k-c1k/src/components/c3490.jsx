import React from 'react';
const LABEL_3490 = 'component_3490';
export function Component3490({ value = 3490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3490, 'data-value': derived.doubled }, children);
}
export default Component3490;
