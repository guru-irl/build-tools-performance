import React from 'react';
const LABEL_33365 = 'component_33365';
export function Component33365({ value = 33365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33365, 'data-value': derived.doubled }, children);
}
export default Component33365;
