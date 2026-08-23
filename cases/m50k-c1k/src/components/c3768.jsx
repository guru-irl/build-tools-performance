import React from 'react';
const LABEL_3768 = 'component_3768';
export function Component3768({ value = 3768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3768, 'data-value': derived.doubled }, children);
}
export default Component3768;
