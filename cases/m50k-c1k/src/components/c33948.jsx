import React from 'react';
const LABEL_33948 = 'component_33948';
export function Component33948({ value = 33948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33948, 'data-value': derived.doubled }, children);
}
export default Component33948;
