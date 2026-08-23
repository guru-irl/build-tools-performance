import React from 'react';
const LABEL_20293 = 'component_20293';
export function Component20293({ value = 20293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20293, 'data-value': derived.doubled }, children);
}
export default Component20293;
