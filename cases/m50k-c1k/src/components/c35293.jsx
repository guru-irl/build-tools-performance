import React from 'react';
const LABEL_35293 = 'component_35293';
export function Component35293({ value = 35293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35293, 'data-value': derived.doubled }, children);
}
export default Component35293;
