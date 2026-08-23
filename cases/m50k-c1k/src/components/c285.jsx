import React from 'react';
const LABEL_285 = 'component_285';
export function Component285({ value = 285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_285, 'data-value': derived.doubled }, children);
}
export default Component285;
