import React from 'react';
const LABEL_503 = 'component_503';
export function Component503({ value = 503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_503, 'data-value': derived.doubled }, children);
}
export default Component503;
