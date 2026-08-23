import React from 'react';
const LABEL_24943 = 'component_24943';
export function Component24943({ value = 24943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24943, 'data-value': derived.doubled }, children);
}
export default Component24943;
