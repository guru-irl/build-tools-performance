import React from 'react';
const LABEL_1293 = 'component_1293';
export function Component1293({ value = 1293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1293, 'data-value': derived.doubled }, children);
}
export default Component1293;
