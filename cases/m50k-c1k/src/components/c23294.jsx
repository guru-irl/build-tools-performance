import React from 'react';
const LABEL_23294 = 'component_23294';
export function Component23294({ value = 23294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23294, 'data-value': derived.doubled }, children);
}
export default Component23294;
