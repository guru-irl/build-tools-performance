import React from 'react';
const LABEL_30943 = 'component_30943';
export function Component30943({ value = 30943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30943, 'data-value': derived.doubled }, children);
}
export default Component30943;
