import React from 'react';
const LABEL_33119 = 'component_33119';
export function Component33119({ value = 33119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33119, 'data-value': derived.doubled }, children);
}
export default Component33119;
