import React from 'react';
const LABEL_10963 = 'component_10963';
export function Component10963({ value = 10963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10963, 'data-value': derived.doubled }, children);
}
export default Component10963;
