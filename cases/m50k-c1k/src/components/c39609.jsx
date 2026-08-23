import React from 'react';
const LABEL_39609 = 'component_39609';
export function Component39609({ value = 39609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39609, 'data-value': derived.doubled }, children);
}
export default Component39609;
