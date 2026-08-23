import React from 'react';
const LABEL_28445 = 'component_28445';
export function Component28445({ value = 28445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28445, 'data-value': derived.doubled }, children);
}
export default Component28445;
