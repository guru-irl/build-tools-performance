import React from 'react';
const LABEL_8667 = 'component_8667';
export function Component8667({ value = 8667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8667, 'data-value': derived.doubled }, children);
}
export default Component8667;
