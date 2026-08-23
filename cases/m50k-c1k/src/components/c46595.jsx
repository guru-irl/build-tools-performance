import React from 'react';
const LABEL_46595 = 'component_46595';
export function Component46595({ value = 46595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46595, 'data-value': derived.doubled }, children);
}
export default Component46595;
