import React from 'react';
const LABEL_32158 = 'component_32158';
export function Component32158({ value = 32158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32158, 'data-value': derived.doubled }, children);
}
export default Component32158;
