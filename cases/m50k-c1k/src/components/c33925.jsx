import React from 'react';
const LABEL_33925 = 'component_33925';
export function Component33925({ value = 33925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33925, 'data-value': derived.doubled }, children);
}
export default Component33925;
