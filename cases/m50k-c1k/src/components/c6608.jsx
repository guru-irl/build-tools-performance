import React from 'react';
const LABEL_6608 = 'component_6608';
export function Component6608({ value = 6608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6608, 'data-value': derived.doubled }, children);
}
export default Component6608;
