import React from 'react';
const LABEL_6158 = 'component_6158';
export function Component6158({ value = 6158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6158, 'data-value': derived.doubled }, children);
}
export default Component6158;
