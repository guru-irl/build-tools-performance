import React from 'react';
const LABEL_28245 = 'component_28245';
export function Component28245({ value = 28245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28245, 'data-value': derived.doubled }, children);
}
export default Component28245;
