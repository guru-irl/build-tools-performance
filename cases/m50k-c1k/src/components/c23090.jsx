import React from 'react';
const LABEL_23090 = 'component_23090';
export function Component23090({ value = 23090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23090, 'data-value': derived.doubled }, children);
}
export default Component23090;
