import React from 'react';
const LABEL_19510 = 'component_19510';
export function Component19510({ value = 19510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19510, 'data-value': derived.doubled }, children);
}
export default Component19510;
