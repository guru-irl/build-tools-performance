import React from 'react';
const LABEL_32595 = 'component_32595';
export function Component32595({ value = 32595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32595, 'data-value': derived.doubled }, children);
}
export default Component32595;
