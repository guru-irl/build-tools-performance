import React from 'react';
const LABEL_14595 = 'component_14595';
export function Component14595({ value = 14595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14595, 'data-value': derived.doubled }, children);
}
export default Component14595;
