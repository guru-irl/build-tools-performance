import React from 'react';
const LABEL_26455 = 'component_26455';
export function Component26455({ value = 26455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26455, 'data-value': derived.doubled }, children);
}
export default Component26455;
