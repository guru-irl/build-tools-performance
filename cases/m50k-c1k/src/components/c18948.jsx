import React from 'react';
const LABEL_18948 = 'component_18948';
export function Component18948({ value = 18948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18948, 'data-value': derived.doubled }, children);
}
export default Component18948;
