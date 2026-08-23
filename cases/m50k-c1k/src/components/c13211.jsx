import React from 'react';
const LABEL_13211 = 'component_13211';
export function Component13211({ value = 13211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13211, 'data-value': derived.doubled }, children);
}
export default Component13211;
