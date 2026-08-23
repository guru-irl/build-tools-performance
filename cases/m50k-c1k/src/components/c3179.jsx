import React from 'react';
const LABEL_3179 = 'component_3179';
export function Component3179({ value = 3179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3179, 'data-value': derived.doubled }, children);
}
export default Component3179;
