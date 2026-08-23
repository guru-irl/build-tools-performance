import React from 'react';
const LABEL_39510 = 'component_39510';
export function Component39510({ value = 39510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39510, 'data-value': derived.doubled }, children);
}
export default Component39510;
