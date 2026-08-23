import React from 'react';
const LABEL_37400 = 'component_37400';
export function Component37400({ value = 37400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37400, 'data-value': derived.doubled }, children);
}
export default Component37400;
