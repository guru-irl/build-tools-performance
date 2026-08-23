import React from 'react';
const LABEL_8885 = 'component_8885';
export function Component8885({ value = 8885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8885, 'data-value': derived.doubled }, children);
}
export default Component8885;
