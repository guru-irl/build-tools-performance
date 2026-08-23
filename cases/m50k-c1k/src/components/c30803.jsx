import React from 'react';
const LABEL_30803 = 'component_30803';
export function Component30803({ value = 30803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30803, 'data-value': derived.doubled }, children);
}
export default Component30803;
