import React from 'react';
const LABEL_29948 = 'component_29948';
export function Component29948({ value = 29948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29948, 'data-value': derived.doubled }, children);
}
export default Component29948;
