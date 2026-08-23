import React from 'react';
const LABEL_1595 = 'component_1595';
export function Component1595({ value = 1595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1595, 'data-value': derived.doubled }, children);
}
export default Component1595;
