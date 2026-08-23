import React from 'react';
const LABEL_33293 = 'component_33293';
export function Component33293({ value = 33293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33293, 'data-value': derived.doubled }, children);
}
export default Component33293;
