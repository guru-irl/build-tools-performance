import React from 'react';
const LABEL_16293 = 'component_16293';
export function Component16293({ value = 16293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16293, 'data-value': derived.doubled }, children);
}
export default Component16293;
