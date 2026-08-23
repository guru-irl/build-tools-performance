import React from 'react';
const LABEL_16455 = 'component_16455';
export function Component16455({ value = 16455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16455, 'data-value': derived.doubled }, children);
}
export default Component16455;
