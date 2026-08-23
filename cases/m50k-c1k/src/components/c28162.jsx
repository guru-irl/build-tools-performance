import React from 'react';
const LABEL_28162 = 'component_28162';
export function Component28162({ value = 28162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28162, 'data-value': derived.doubled }, children);
}
export default Component28162;
