import React from 'react';
const LABEL_5948 = 'component_5948';
export function Component5948({ value = 5948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5948, 'data-value': derived.doubled }, children);
}
export default Component5948;
