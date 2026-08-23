import React from 'react';
const LABEL_25608 = 'component_25608';
export function Component25608({ value = 25608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25608, 'data-value': derived.doubled }, children);
}
export default Component25608;
