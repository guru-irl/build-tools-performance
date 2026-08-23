import React from 'react';
const LABEL_18285 = 'component_18285';
export function Component18285({ value = 18285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18285, 'data-value': derived.doubled }, children);
}
export default Component18285;
