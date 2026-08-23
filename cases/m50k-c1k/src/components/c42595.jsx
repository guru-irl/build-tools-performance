import React from 'react';
const LABEL_42595 = 'component_42595';
export function Component42595({ value = 42595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42595, 'data-value': derived.doubled }, children);
}
export default Component42595;
