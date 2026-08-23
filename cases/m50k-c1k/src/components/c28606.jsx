import React from 'react';
const LABEL_28606 = 'component_28606';
export function Component28606({ value = 28606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28606, 'data-value': derived.doubled }, children);
}
export default Component28606;
