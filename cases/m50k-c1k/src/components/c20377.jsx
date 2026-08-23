import React from 'react';
const LABEL_20377 = 'component_20377';
export function Component20377({ value = 20377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20377, 'data-value': derived.doubled }, children);
}
export default Component20377;
