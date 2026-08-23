import React from 'react';
const LABEL_11644 = 'component_11644';
export function Component11644({ value = 11644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11644, 'data-value': derived.doubled }, children);
}
export default Component11644;
