import React from 'react';
const LABEL_39992 = 'component_39992';
export function Component39992({ value = 39992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39992, 'data-value': derived.doubled }, children);
}
export default Component39992;
