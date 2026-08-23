import React from 'react';
const LABEL_32855 = 'component_32855';
export function Component32855({ value = 32855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32855, 'data-value': derived.doubled }, children);
}
export default Component32855;
