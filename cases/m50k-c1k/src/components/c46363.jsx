import React from 'react';
const LABEL_46363 = 'component_46363';
export function Component46363({ value = 46363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46363, 'data-value': derived.doubled }, children);
}
export default Component46363;
