import React from 'react';
const LABEL_3248 = 'component_3248';
export function Component3248({ value = 3248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3248, 'data-value': derived.doubled }, children);
}
export default Component3248;
