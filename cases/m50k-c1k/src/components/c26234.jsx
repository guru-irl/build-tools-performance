import React from 'react';
const LABEL_26234 = 'component_26234';
export function Component26234({ value = 26234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26234, 'data-value': derived.doubled }, children);
}
export default Component26234;
