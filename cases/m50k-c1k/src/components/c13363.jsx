import React from 'react';
const LABEL_13363 = 'component_13363';
export function Component13363({ value = 13363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13363, 'data-value': derived.doubled }, children);
}
export default Component13363;
