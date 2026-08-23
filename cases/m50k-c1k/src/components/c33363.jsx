import React from 'react';
const LABEL_33363 = 'component_33363';
export function Component33363({ value = 33363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33363, 'data-value': derived.doubled }, children);
}
export default Component33363;
