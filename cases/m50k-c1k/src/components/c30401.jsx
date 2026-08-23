import React from 'react';
const LABEL_30401 = 'component_30401';
export function Component30401({ value = 30401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30401, 'data-value': derived.doubled }, children);
}
export default Component30401;
