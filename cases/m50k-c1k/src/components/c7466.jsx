import React from 'react';
const LABEL_7466 = 'component_7466';
export function Component7466({ value = 7466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7466, 'data-value': derived.doubled }, children);
}
export default Component7466;
