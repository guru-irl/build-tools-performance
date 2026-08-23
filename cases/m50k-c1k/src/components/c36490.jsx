import React from 'react';
const LABEL_36490 = 'component_36490';
export function Component36490({ value = 36490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36490, 'data-value': derived.doubled }, children);
}
export default Component36490;
