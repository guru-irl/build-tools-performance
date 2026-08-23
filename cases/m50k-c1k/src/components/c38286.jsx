import React from 'react';
const LABEL_38286 = 'component_38286';
export function Component38286({ value = 38286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38286, 'data-value': derived.doubled }, children);
}
export default Component38286;
