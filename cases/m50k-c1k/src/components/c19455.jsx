import React from 'react';
const LABEL_19455 = 'component_19455';
export function Component19455({ value = 19455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19455, 'data-value': derived.doubled }, children);
}
export default Component19455;
