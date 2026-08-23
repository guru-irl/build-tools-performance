import React from 'react';
const LABEL_30503 = 'component_30503';
export function Component30503({ value = 30503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30503, 'data-value': derived.doubled }, children);
}
export default Component30503;
