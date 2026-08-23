import React from 'react';
const LABEL_17190 = 'component_17190';
export function Component17190({ value = 17190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17190, 'data-value': derived.doubled }, children);
}
export default Component17190;
