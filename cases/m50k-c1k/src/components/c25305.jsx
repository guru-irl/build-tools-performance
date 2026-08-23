import React from 'react';
const LABEL_25305 = 'component_25305';
export function Component25305({ value = 25305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25305, 'data-value': derived.doubled }, children);
}
export default Component25305;
