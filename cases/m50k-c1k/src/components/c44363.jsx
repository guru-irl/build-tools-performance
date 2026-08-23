import React from 'react';
const LABEL_44363 = 'component_44363';
export function Component44363({ value = 44363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44363, 'data-value': derived.doubled }, children);
}
export default Component44363;
