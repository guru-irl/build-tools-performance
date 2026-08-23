import React from 'react';
const LABEL_5363 = 'component_5363';
export function Component5363({ value = 5363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5363, 'data-value': derived.doubled }, children);
}
export default Component5363;
