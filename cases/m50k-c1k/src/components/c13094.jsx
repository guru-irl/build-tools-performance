import React from 'react';
const LABEL_13094 = 'component_13094';
export function Component13094({ value = 13094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13094, 'data-value': derived.doubled }, children);
}
export default Component13094;
