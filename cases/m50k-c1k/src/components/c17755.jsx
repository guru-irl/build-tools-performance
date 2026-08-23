import React from 'react';
const LABEL_17755 = 'component_17755';
export function Component17755({ value = 17755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17755, 'data-value': derived.doubled }, children);
}
export default Component17755;
