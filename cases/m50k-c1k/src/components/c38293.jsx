import React from 'react';
const LABEL_38293 = 'component_38293';
export function Component38293({ value = 38293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38293, 'data-value': derived.doubled }, children);
}
export default Component38293;
