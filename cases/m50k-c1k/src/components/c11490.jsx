import React from 'react';
const LABEL_11490 = 'component_11490';
export function Component11490({ value = 11490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11490, 'data-value': derived.doubled }, children);
}
export default Component11490;
