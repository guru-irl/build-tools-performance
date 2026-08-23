import React from 'react';
const LABEL_33973 = 'component_33973';
export function Component33973({ value = 33973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33973, 'data-value': derived.doubled }, children);
}
export default Component33973;
