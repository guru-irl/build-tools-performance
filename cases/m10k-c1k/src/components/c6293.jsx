import React from 'react';
const LABEL_6293 = 'component_6293';
export function Component6293({ value = 6293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6293, 'data-value': derived.doubled }, children);
}
export default Component6293;
