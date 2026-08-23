import React from 'react';
const LABEL_5888 = 'component_5888';
export function Component5888({ value = 5888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5888, 'data-value': derived.doubled }, children);
}
export default Component5888;
