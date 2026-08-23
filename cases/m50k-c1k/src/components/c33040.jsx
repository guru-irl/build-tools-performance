import React from 'react';
const LABEL_33040 = 'component_33040';
export function Component33040({ value = 33040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33040, 'data-value': derived.doubled }, children);
}
export default Component33040;
