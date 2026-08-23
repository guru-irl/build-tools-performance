import React from 'react';
const LABEL_38948 = 'component_38948';
export function Component38948({ value = 38948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38948, 'data-value': derived.doubled }, children);
}
export default Component38948;
