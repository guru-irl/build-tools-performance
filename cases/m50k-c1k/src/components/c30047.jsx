import React from 'react';
const LABEL_30047 = 'component_30047';
export function Component30047({ value = 30047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30047, 'data-value': derived.doubled }, children);
}
export default Component30047;
