import React from 'react';
const LABEL_3171 = 'component_3171';
export function Component3171({ value = 3171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3171, 'data-value': derived.doubled }, children);
}
export default Component3171;
