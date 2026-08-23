import React from 'react';
const LABEL_26261 = 'component_26261';
export function Component26261({ value = 26261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26261, 'data-value': derived.doubled }, children);
}
export default Component26261;
