import React from 'react';
const LABEL_16595 = 'component_16595';
export function Component16595({ value = 16595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16595, 'data-value': derived.doubled }, children);
}
export default Component16595;
