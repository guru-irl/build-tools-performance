import React from 'react';
const LABEL_6490 = 'component_6490';
export function Component6490({ value = 6490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6490, 'data-value': derived.doubled }, children);
}
export default Component6490;
