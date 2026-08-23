import React from 'react';
const LABEL_46503 = 'component_46503';
export function Component46503({ value = 46503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46503, 'data-value': derived.doubled }, children);
}
export default Component46503;
