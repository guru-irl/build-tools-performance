import React from 'react';
const LABEL_18504 = 'component_18504';
export function Component18504({ value = 18504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18504, 'data-value': derived.doubled }, children);
}
export default Component18504;
