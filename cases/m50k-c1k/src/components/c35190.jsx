import React from 'react';
const LABEL_35190 = 'component_35190';
export function Component35190({ value = 35190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35190, 'data-value': derived.doubled }, children);
}
export default Component35190;
