import React from 'react';
const LABEL_6294 = 'component_6294';
export function Component6294({ value = 6294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6294, 'data-value': derived.doubled }, children);
}
export default Component6294;
