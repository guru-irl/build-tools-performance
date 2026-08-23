import React from 'react';
const LABEL_15948 = 'component_15948';
export function Component15948({ value = 15948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15948, 'data-value': derived.doubled }, children);
}
export default Component15948;
