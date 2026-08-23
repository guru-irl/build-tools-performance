import React from 'react';
const LABEL_36948 = 'component_36948';
export function Component36948({ value = 36948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36948, 'data-value': derived.doubled }, children);
}
export default Component36948;
