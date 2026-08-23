import React from 'react';
const LABEL_12490 = 'component_12490';
export function Component12490({ value = 12490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12490, 'data-value': derived.doubled }, children);
}
export default Component12490;
