import React from 'react';
const LABEL_28842 = 'component_28842';
export function Component28842({ value = 28842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28842, 'data-value': derived.doubled }, children);
}
export default Component28842;
