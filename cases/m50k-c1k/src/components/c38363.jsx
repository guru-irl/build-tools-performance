import React from 'react';
const LABEL_38363 = 'component_38363';
export function Component38363({ value = 38363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38363, 'data-value': derived.doubled }, children);
}
export default Component38363;
