import React from 'react';
const LABEL_22286 = 'component_22286';
export function Component22286({ value = 22286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22286, 'data-value': derived.doubled }, children);
}
export default Component22286;
