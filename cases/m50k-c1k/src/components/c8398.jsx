import React from 'react';
const LABEL_8398 = 'component_8398';
export function Component8398({ value = 8398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8398, 'data-value': derived.doubled }, children);
}
export default Component8398;
