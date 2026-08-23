import React from 'react';
const LABEL_34363 = 'component_34363';
export function Component34363({ value = 34363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34363, 'data-value': derived.doubled }, children);
}
export default Component34363;
