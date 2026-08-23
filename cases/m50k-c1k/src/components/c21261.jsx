import React from 'react';
const LABEL_21261 = 'component_21261';
export function Component21261({ value = 21261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21261, 'data-value': derived.doubled }, children);
}
export default Component21261;
