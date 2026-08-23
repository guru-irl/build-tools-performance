import React from 'react';
const LABEL_34286 = 'component_34286';
export function Component34286({ value = 34286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34286, 'data-value': derived.doubled }, children);
}
export default Component34286;
