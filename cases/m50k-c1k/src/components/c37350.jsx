import React from 'react';
const LABEL_37350 = 'component_37350';
export function Component37350({ value = 37350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37350, 'data-value': derived.doubled }, children);
}
export default Component37350;
