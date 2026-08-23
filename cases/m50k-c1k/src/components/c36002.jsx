import React from 'react';
const LABEL_36002 = 'component_36002';
export function Component36002({ value = 36002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36002, 'data-value': derived.doubled }, children);
}
export default Component36002;
