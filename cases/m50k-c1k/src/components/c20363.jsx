import React from 'react';
const LABEL_20363 = 'component_20363';
export function Component20363({ value = 20363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20363, 'data-value': derived.doubled }, children);
}
export default Component20363;
