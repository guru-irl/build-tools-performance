import React from 'react';
const LABEL_22651 = 'component_22651';
export function Component22651({ value = 22651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22651, 'data-value': derived.doubled }, children);
}
export default Component22651;
