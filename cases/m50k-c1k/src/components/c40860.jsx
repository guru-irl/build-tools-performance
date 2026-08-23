import React from 'react';
const LABEL_40860 = 'component_40860';
export function Component40860({ value = 40860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40860, 'data-value': derived.doubled }, children);
}
export default Component40860;
