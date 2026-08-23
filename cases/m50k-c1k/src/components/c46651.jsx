import React from 'react';
const LABEL_46651 = 'component_46651';
export function Component46651({ value = 46651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46651, 'data-value': derived.doubled }, children);
}
export default Component46651;
