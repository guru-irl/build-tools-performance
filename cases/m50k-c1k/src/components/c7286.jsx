import React from 'react';
const LABEL_7286 = 'component_7286';
export function Component7286({ value = 7286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7286, 'data-value': derived.doubled }, children);
}
export default Component7286;
