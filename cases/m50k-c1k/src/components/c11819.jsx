import React from 'react';
const LABEL_11819 = 'component_11819';
export function Component11819({ value = 11819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11819, 'data-value': derived.doubled }, children);
}
export default Component11819;
