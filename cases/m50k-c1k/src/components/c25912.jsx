import React from 'react';
const LABEL_25912 = 'component_25912';
export function Component25912({ value = 25912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25912, 'data-value': derived.doubled }, children);
}
export default Component25912;
