import React from 'react';
const LABEL_40490 = 'component_40490';
export function Component40490({ value = 40490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40490, 'data-value': derived.doubled }, children);
}
export default Component40490;
