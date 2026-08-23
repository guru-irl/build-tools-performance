import React from 'react';
const LABEL_15966 = 'component_15966';
export function Component15966({ value = 15966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15966, 'data-value': derived.doubled }, children);
}
export default Component15966;
