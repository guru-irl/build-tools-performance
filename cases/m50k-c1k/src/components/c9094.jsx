import React from 'react';
const LABEL_9094 = 'component_9094';
export function Component9094({ value = 9094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9094, 'data-value': derived.doubled }, children);
}
export default Component9094;
