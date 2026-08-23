import React from 'react';
const LABEL_36363 = 'component_36363';
export function Component36363({ value = 36363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36363, 'data-value': derived.doubled }, children);
}
export default Component36363;
