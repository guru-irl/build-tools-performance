import React from 'react';
const LABEL_29094 = 'component_29094';
export function Component29094({ value = 29094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29094, 'data-value': derived.doubled }, children);
}
export default Component29094;
