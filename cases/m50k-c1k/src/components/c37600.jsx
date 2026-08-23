import React from 'react';
const LABEL_37600 = 'component_37600';
export function Component37600({ value = 37600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37600, 'data-value': derived.doubled }, children);
}
export default Component37600;
