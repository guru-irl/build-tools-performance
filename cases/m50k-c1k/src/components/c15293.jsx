import React from 'react';
const LABEL_15293 = 'component_15293';
export function Component15293({ value = 15293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15293, 'data-value': derived.doubled }, children);
}
export default Component15293;
