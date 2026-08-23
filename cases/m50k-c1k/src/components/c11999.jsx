import React from 'react';
const LABEL_11999 = 'component_11999';
export function Component11999({ value = 11999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11999, 'data-value': derived.doubled }, children);
}
export default Component11999;
