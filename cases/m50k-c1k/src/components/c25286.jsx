import React from 'react';
const LABEL_25286 = 'component_25286';
export function Component25286({ value = 25286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25286, 'data-value': derived.doubled }, children);
}
export default Component25286;
