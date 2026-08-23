import React from 'react';
const LABEL_948 = 'component_948';
export function Component948({ value = 948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_948, 'data-value': derived.doubled }, children);
}
export default Component948;
