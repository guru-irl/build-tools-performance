import React from 'react';
const LABEL_26817 = 'component_26817';
export function Component26817({ value = 26817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26817, 'data-value': derived.doubled }, children);
}
export default Component26817;
