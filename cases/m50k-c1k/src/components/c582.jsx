import React from 'react';
const LABEL_582 = 'component_582';
export function Component582({ value = 582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_582, 'data-value': derived.doubled }, children);
}
export default Component582;
