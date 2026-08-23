import React from 'react';
const LABEL_25297 = 'component_25297';
export function Component25297({ value = 25297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25297, 'data-value': derived.doubled }, children);
}
export default Component25297;
