import React from 'react';
const LABEL_26709 = 'component_26709';
export function Component26709({ value = 26709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26709, 'data-value': derived.doubled }, children);
}
export default Component26709;
