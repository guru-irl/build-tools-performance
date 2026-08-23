import React from 'react';
const LABEL_30856 = 'component_30856';
export function Component30856({ value = 30856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30856, 'data-value': derived.doubled }, children);
}
export default Component30856;
