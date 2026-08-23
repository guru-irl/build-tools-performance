import React from 'react';
const LABEL_7218 = 'component_7218';
export function Component7218({ value = 7218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7218, 'data-value': derived.doubled }, children);
}
export default Component7218;
