import React from 'react';
const LABEL_12293 = 'component_12293';
export function Component12293({ value = 12293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12293, 'data-value': derived.doubled }, children);
}
export default Component12293;
