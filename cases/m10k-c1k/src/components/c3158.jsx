import React from 'react';
const LABEL_3158 = 'component_3158';
export function Component3158({ value = 3158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3158, 'data-value': derived.doubled }, children);
}
export default Component3158;
