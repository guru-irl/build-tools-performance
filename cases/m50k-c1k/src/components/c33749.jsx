import React from 'react';
const LABEL_33749 = 'component_33749';
export function Component33749({ value = 33749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33749, 'data-value': derived.doubled }, children);
}
export default Component33749;
