import React from 'react';
const LABEL_26285 = 'component_26285';
export function Component26285({ value = 26285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26285, 'data-value': derived.doubled }, children);
}
export default Component26285;
