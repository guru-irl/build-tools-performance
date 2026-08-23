import React from 'react';
const LABEL_9983 = 'component_9983';
export function Component9983({ value = 9983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9983, 'data-value': derived.doubled }, children);
}
export default Component9983;
