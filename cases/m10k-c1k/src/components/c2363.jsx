import React from 'react';
const LABEL_2363 = 'component_2363';
export function Component2363({ value = 2363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2363, 'data-value': derived.doubled }, children);
}
export default Component2363;
