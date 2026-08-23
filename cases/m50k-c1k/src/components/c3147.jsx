import React from 'react';
const LABEL_3147 = 'component_3147';
export function Component3147({ value = 3147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3147, 'data-value': derived.doubled }, children);
}
export default Component3147;
