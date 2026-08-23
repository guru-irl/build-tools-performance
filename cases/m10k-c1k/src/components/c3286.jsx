import React from 'react';
const LABEL_3286 = 'component_3286';
export function Component3286({ value = 3286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3286, 'data-value': derived.doubled }, children);
}
export default Component3286;
