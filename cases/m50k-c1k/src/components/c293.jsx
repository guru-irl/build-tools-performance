import React from 'react';
const LABEL_293 = 'component_293';
export function Component293({ value = 293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_293, 'data-value': derived.doubled }, children);
}
export default Component293;
