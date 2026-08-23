import React from 'react';
const LABEL_25948 = 'component_25948';
export function Component25948({ value = 25948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25948, 'data-value': derived.doubled }, children);
}
export default Component25948;
