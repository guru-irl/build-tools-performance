import React from 'react';
const LABEL_38455 = 'component_38455';
export function Component38455({ value = 38455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38455, 'data-value': derived.doubled }, children);
}
export default Component38455;
