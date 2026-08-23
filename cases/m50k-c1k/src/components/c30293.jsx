import React from 'react';
const LABEL_30293 = 'component_30293';
export function Component30293({ value = 30293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30293, 'data-value': derived.doubled }, children);
}
export default Component30293;
