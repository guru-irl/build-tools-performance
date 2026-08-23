import React from 'react';
const LABEL_26749 = 'component_26749';
export function Component26749({ value = 26749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26749, 'data-value': derived.doubled }, children);
}
export default Component26749;
