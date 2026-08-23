import React from 'react';
const LABEL_6261 = 'component_6261';
export function Component6261({ value = 6261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6261, 'data-value': derived.doubled }, children);
}
export default Component6261;
