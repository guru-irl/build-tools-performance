import React from 'react';
const LABEL_28363 = 'component_28363';
export function Component28363({ value = 28363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28363, 'data-value': derived.doubled }, children);
}
export default Component28363;
