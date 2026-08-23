import React from 'react';
const LABEL_23948 = 'component_23948';
export function Component23948({ value = 23948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23948, 'data-value': derived.doubled }, children);
}
export default Component23948;
