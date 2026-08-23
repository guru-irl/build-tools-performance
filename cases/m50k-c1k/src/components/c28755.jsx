import React from 'react';
const LABEL_28755 = 'component_28755';
export function Component28755({ value = 28755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28755, 'data-value': derived.doubled }, children);
}
export default Component28755;
