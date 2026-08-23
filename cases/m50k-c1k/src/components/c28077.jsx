import React from 'react';
const LABEL_28077 = 'component_28077';
export function Component28077({ value = 28077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28077, 'data-value': derived.doubled }, children);
}
export default Component28077;
