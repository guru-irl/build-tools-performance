import React from 'react';
const LABEL_12190 = 'component_12190';
export function Component12190({ value = 12190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12190, 'data-value': derived.doubled }, children);
}
export default Component12190;
