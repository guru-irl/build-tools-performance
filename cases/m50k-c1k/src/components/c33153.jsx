import React from 'react';
const LABEL_33153 = 'component_33153';
export function Component33153({ value = 33153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33153, 'data-value': derived.doubled }, children);
}
export default Component33153;
