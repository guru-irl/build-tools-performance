import React from 'react';
const LABEL_36081 = 'component_36081';
export function Component36081({ value = 36081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36081, 'data-value': derived.doubled }, children);
}
export default Component36081;
