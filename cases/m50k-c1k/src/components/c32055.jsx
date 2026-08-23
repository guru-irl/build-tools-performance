import React from 'react';
const LABEL_32055 = 'component_32055';
export function Component32055({ value = 32055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32055, 'data-value': derived.doubled }, children);
}
export default Component32055;
