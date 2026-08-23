import React from 'react';
const LABEL_12924 = 'component_12924';
export function Component12924({ value = 12924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12924, 'data-value': derived.doubled }, children);
}
export default Component12924;
