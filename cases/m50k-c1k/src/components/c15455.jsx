import React from 'react';
const LABEL_15455 = 'component_15455';
export function Component15455({ value = 15455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15455, 'data-value': derived.doubled }, children);
}
export default Component15455;
