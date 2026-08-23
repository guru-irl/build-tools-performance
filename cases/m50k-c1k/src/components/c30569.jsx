import React from 'react';
const LABEL_30569 = 'component_30569';
export function Component30569({ value = 30569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30569, 'data-value': derived.doubled }, children);
}
export default Component30569;
