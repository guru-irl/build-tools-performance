import React from 'react';
const LABEL_11814 = 'component_11814';
export function Component11814({ value = 11814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11814, 'data-value': derived.doubled }, children);
}
export default Component11814;
