import React from 'react';
const LABEL_28676 = 'component_28676';
export function Component28676({ value = 28676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28676, 'data-value': derived.doubled }, children);
}
export default Component28676;
