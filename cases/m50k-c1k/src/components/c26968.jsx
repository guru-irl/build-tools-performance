import React from 'react';
const LABEL_26968 = 'component_26968';
export function Component26968({ value = 26968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26968, 'data-value': derived.doubled }, children);
}
export default Component26968;
