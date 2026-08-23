import React from 'react';
const LABEL_35595 = 'component_35595';
export function Component35595({ value = 35595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35595, 'data-value': derived.doubled }, children);
}
export default Component35595;
