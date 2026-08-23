import React from 'react';
const LABEL_25440 = 'component_25440';
export function Component25440({ value = 25440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25440, 'data-value': derived.doubled }, children);
}
export default Component25440;
