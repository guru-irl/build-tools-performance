import React from 'react';
const LABEL_31293 = 'component_31293';
export function Component31293({ value = 31293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31293, 'data-value': derived.doubled }, children);
}
export default Component31293;
