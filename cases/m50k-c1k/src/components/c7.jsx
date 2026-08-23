import React from 'react';
const LABEL_7 = 'component_7';
export function Component7({ value = 7, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7, 'data-value': derived.doubled }, children);
}
export default Component7;
