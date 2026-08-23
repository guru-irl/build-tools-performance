import React from 'react';
const LABEL_7768 = 'component_7768';
export function Component7768({ value = 7768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7768, 'data-value': derived.doubled }, children);
}
export default Component7768;
