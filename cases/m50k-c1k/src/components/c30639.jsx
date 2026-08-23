import React from 'react';
const LABEL_30639 = 'component_30639';
export function Component30639({ value = 30639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30639, 'data-value': derived.doubled }, children);
}
export default Component30639;
