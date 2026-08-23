import React from 'react';
const LABEL_19293 = 'component_19293';
export function Component19293({ value = 19293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19293, 'data-value': derived.doubled }, children);
}
export default Component19293;
