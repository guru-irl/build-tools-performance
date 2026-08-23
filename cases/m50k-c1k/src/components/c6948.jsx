import React from 'react';
const LABEL_6948 = 'component_6948';
export function Component6948({ value = 6948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6948, 'data-value': derived.doubled }, children);
}
export default Component6948;
