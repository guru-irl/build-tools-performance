import React from 'react';
const LABEL_39968 = 'component_39968';
export function Component39968({ value = 39968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39968, 'data-value': derived.doubled }, children);
}
export default Component39968;
