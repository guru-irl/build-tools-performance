import React from 'react';
const LABEL_26515 = 'component_26515';
export function Component26515({ value = 26515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26515, 'data-value': derived.doubled }, children);
}
export default Component26515;
