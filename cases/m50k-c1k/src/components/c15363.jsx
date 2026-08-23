import React from 'react';
const LABEL_15363 = 'component_15363';
export function Component15363({ value = 15363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15363, 'data-value': derived.doubled }, children);
}
export default Component15363;
