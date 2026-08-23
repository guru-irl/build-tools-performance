import React from 'react';
const LABEL_39481 = 'component_39481';
export function Component39481({ value = 39481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39481, 'data-value': derived.doubled }, children);
}
export default Component39481;
