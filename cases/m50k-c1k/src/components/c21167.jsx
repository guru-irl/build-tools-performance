import React from 'react';
const LABEL_21167 = 'component_21167';
export function Component21167({ value = 21167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21167, 'data-value': derived.doubled }, children);
}
export default Component21167;
