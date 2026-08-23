import React from 'react';
const LABEL_37595 = 'component_37595';
export function Component37595({ value = 37595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37595, 'data-value': derived.doubled }, children);
}
export default Component37595;
