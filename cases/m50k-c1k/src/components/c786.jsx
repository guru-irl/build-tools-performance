import React from 'react';
const LABEL_786 = 'component_786';
export function Component786({ value = 786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_786, 'data-value': derived.doubled }, children);
}
export default Component786;
