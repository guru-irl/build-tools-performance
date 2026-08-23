import React from 'react';
const LABEL_8595 = 'component_8595';
export function Component8595({ value = 8595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8595, 'data-value': derived.doubled }, children);
}
export default Component8595;
