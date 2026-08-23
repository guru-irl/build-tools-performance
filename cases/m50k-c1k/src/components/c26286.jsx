import React from 'react';
const LABEL_26286 = 'component_26286';
export function Component26286({ value = 26286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26286, 'data-value': derived.doubled }, children);
}
export default Component26286;
