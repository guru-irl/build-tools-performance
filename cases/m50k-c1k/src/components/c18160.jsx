import React from 'react';
const LABEL_18160 = 'component_18160';
export function Component18160({ value = 18160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18160, 'data-value': derived.doubled }, children);
}
export default Component18160;
