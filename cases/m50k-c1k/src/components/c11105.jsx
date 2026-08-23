import React from 'react';
const LABEL_11105 = 'component_11105';
export function Component11105({ value = 11105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11105, 'data-value': derived.doubled }, children);
}
export default Component11105;
