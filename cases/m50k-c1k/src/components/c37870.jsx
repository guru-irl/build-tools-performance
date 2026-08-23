import React from 'react';
const LABEL_37870 = 'component_37870';
export function Component37870({ value = 37870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37870, 'data-value': derived.doubled }, children);
}
export default Component37870;
