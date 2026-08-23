import React from 'react';
const LABEL_8363 = 'component_8363';
export function Component8363({ value = 8363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8363, 'data-value': derived.doubled }, children);
}
export default Component8363;
