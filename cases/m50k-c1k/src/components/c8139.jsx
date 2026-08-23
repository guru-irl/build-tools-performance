import React from 'react';
const LABEL_8139 = 'component_8139';
export function Component8139({ value = 8139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8139, 'data-value': derived.doubled }, children);
}
export default Component8139;
