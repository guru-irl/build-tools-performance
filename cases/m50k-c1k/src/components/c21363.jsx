import React from 'react';
const LABEL_21363 = 'component_21363';
export function Component21363({ value = 21363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21363, 'data-value': derived.doubled }, children);
}
export default Component21363;
