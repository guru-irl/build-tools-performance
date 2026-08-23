import React from 'react';
const LABEL_25993 = 'component_25993';
export function Component25993({ value = 25993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25993, 'data-value': derived.doubled }, children);
}
export default Component25993;
