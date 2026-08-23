import React from 'react';
const LABEL_31595 = 'component_31595';
export function Component31595({ value = 31595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31595, 'data-value': derived.doubled }, children);
}
export default Component31595;
