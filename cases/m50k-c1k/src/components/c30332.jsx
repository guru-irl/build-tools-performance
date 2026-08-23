import React from 'react';
const LABEL_30332 = 'component_30332';
export function Component30332({ value = 30332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30332, 'data-value': derived.doubled }, children);
}
export default Component30332;
