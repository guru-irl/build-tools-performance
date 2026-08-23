import React from 'react';
const LABEL_40106 = 'component_40106';
export function Component40106({ value = 40106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40106, 'data-value': derived.doubled }, children);
}
export default Component40106;
