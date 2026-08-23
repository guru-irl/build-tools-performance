import React from 'react';
const LABEL_30165 = 'component_30165';
export function Component30165({ value = 30165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30165, 'data-value': derived.doubled }, children);
}
export default Component30165;
