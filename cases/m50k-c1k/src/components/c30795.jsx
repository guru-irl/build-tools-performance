import React from 'react';
const LABEL_30795 = 'component_30795';
export function Component30795({ value = 30795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30795, 'data-value': derived.doubled }, children);
}
export default Component30795;
