import React from 'react';
const LABEL_43286 = 'component_43286';
export function Component43286({ value = 43286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43286, 'data-value': derived.doubled }, children);
}
export default Component43286;
