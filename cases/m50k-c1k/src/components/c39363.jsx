import React from 'react';
const LABEL_39363 = 'component_39363';
export function Component39363({ value = 39363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39363, 'data-value': derived.doubled }, children);
}
export default Component39363;
