import React from 'react';
const LABEL_25337 = 'component_25337';
export function Component25337({ value = 25337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25337, 'data-value': derived.doubled }, children);
}
export default Component25337;
