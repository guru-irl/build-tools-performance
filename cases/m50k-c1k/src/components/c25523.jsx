import React from 'react';
const LABEL_25523 = 'component_25523';
export function Component25523({ value = 25523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25523, 'data-value': derived.doubled }, children);
}
export default Component25523;
