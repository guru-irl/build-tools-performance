import React from 'react';
const LABEL_30920 = 'component_30920';
export function Component30920({ value = 30920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30920, 'data-value': derived.doubled }, children);
}
export default Component30920;
