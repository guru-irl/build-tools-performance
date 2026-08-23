import React from 'react';
const LABEL_7948 = 'component_7948';
export function Component7948({ value = 7948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7948, 'data-value': derived.doubled }, children);
}
export default Component7948;
