import React from 'react';
const LABEL_28210 = 'component_28210';
export function Component28210({ value = 28210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28210, 'data-value': derived.doubled }, children);
}
export default Component28210;
