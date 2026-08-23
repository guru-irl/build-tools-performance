import React from 'react';
const LABEL_24111 = 'component_24111';
export function Component24111({ value = 24111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24111, 'data-value': derived.doubled }, children);
}
export default Component24111;
