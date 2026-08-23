import React from 'react';
const LABEL_46293 = 'component_46293';
export function Component46293({ value = 46293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46293, 'data-value': derived.doubled }, children);
}
export default Component46293;
