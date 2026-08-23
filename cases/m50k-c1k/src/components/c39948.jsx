import React from 'react';
const LABEL_39948 = 'component_39948';
export function Component39948({ value = 39948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39948, 'data-value': derived.doubled }, children);
}
export default Component39948;
