import React from 'react';
const LABEL_30608 = 'component_30608';
export function Component30608({ value = 30608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30608, 'data-value': derived.doubled }, children);
}
export default Component30608;
