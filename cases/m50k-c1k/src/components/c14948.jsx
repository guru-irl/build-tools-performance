import React from 'react';
const LABEL_14948 = 'component_14948';
export function Component14948({ value = 14948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14948, 'data-value': derived.doubled }, children);
}
export default Component14948;
