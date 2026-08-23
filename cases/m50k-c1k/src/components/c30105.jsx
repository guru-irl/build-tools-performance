import React from 'react';
const LABEL_30105 = 'component_30105';
export function Component30105({ value = 30105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30105, 'data-value': derived.doubled }, children);
}
export default Component30105;
