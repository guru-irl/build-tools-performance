import React from 'react';
const LABEL_42293 = 'component_42293';
export function Component42293({ value = 42293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42293, 'data-value': derived.doubled }, children);
}
export default Component42293;
