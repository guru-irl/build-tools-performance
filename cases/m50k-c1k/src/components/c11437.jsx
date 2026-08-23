import React from 'react';
const LABEL_11437 = 'component_11437';
export function Component11437({ value = 11437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11437, 'data-value': derived.doubled }, children);
}
export default Component11437;
