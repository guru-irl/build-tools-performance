import React from 'react';
const LABEL_11263 = 'component_11263';
export function Component11263({ value = 11263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11263, 'data-value': derived.doubled }, children);
}
export default Component11263;
