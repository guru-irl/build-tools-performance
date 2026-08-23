import React from 'react';
const LABEL_11293 = 'component_11293';
export function Component11293({ value = 11293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11293, 'data-value': derived.doubled }, children);
}
export default Component11293;
