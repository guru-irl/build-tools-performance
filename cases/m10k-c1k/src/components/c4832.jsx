import React from 'react';
const LABEL_4832 = 'component_4832';
export function Component4832({ value = 4832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4832, 'data-value': derived.doubled }, children);
}
export default Component4832;
