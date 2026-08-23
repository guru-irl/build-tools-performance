import React from 'react';
const LABEL_5966 = 'component_5966';
export function Component5966({ value = 5966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5966, 'data-value': derived.doubled }, children);
}
export default Component5966;
