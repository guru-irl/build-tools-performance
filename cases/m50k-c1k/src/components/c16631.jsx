import React from 'react';
const LABEL_16631 = 'component_16631';
export function Component16631({ value = 16631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16631, 'data-value': derived.doubled }, children);
}
export default Component16631;
