import React from 'react';
const LABEL_16490 = 'component_16490';
export function Component16490({ value = 16490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16490, 'data-value': derived.doubled }, children);
}
export default Component16490;
