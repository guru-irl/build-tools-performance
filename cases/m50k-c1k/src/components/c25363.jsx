import React from 'react';
const LABEL_25363 = 'component_25363';
export function Component25363({ value = 25363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25363, 'data-value': derived.doubled }, children);
}
export default Component25363;
