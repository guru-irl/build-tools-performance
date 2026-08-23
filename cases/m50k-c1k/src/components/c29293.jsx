import React from 'react';
const LABEL_29293 = 'component_29293';
export function Component29293({ value = 29293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29293, 'data-value': derived.doubled }, children);
}
export default Component29293;
