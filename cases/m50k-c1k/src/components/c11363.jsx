import React from 'react';
const LABEL_11363 = 'component_11363';
export function Component11363({ value = 11363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11363, 'data-value': derived.doubled }, children);
}
export default Component11363;
