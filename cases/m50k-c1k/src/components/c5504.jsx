import React from 'react';
const LABEL_5504 = 'component_5504';
export function Component5504({ value = 5504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5504, 'data-value': derived.doubled }, children);
}
export default Component5504;
