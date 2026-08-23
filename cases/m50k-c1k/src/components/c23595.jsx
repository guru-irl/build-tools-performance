import React from 'react';
const LABEL_23595 = 'component_23595';
export function Component23595({ value = 23595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23595, 'data-value': derived.doubled }, children);
}
export default Component23595;
