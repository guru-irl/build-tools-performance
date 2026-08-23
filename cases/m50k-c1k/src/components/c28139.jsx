import React from 'react';
const LABEL_28139 = 'component_28139';
export function Component28139({ value = 28139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28139, 'data-value': derived.doubled }, children);
}
export default Component28139;
