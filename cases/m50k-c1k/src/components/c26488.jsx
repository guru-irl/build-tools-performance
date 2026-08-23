import React from 'react';
const LABEL_26488 = 'component_26488';
export function Component26488({ value = 26488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26488, 'data-value': derived.doubled }, children);
}
export default Component26488;
