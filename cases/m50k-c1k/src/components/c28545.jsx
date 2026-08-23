import React from 'react';
const LABEL_28545 = 'component_28545';
export function Component28545({ value = 28545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28545, 'data-value': derived.doubled }, children);
}
export default Component28545;
