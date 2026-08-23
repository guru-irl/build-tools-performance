import React from 'react';
const LABEL_39742 = 'component_39742';
export function Component39742({ value = 39742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39742, 'data-value': derived.doubled }, children);
}
export default Component39742;
