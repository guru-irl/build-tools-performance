import React from 'react';
const LABEL_10286 = 'component_10286';
export function Component10286({ value = 10286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10286, 'data-value': derived.doubled }, children);
}
export default Component10286;
