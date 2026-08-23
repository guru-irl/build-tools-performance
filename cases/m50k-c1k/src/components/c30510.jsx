import React from 'react';
const LABEL_30510 = 'component_30510';
export function Component30510({ value = 30510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30510, 'data-value': derived.doubled }, children);
}
export default Component30510;
