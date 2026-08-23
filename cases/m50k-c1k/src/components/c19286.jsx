import React from 'react';
const LABEL_19286 = 'component_19286';
export function Component19286({ value = 19286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19286, 'data-value': derived.doubled }, children);
}
export default Component19286;
