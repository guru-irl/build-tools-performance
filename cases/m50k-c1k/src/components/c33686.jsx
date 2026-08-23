import React from 'react';
const LABEL_33686 = 'component_33686';
export function Component33686({ value = 33686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33686, 'data-value': derived.doubled }, children);
}
export default Component33686;
