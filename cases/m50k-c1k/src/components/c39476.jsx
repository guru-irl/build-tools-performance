import React from 'react';
const LABEL_39476 = 'component_39476';
export function Component39476({ value = 39476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39476, 'data-value': derived.doubled }, children);
}
export default Component39476;
