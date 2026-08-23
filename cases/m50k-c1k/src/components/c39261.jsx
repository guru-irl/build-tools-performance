import React from 'react';
const LABEL_39261 = 'component_39261';
export function Component39261({ value = 39261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39261, 'data-value': derived.doubled }, children);
}
export default Component39261;
