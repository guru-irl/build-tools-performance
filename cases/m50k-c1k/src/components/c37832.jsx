import React from 'react';
const LABEL_37832 = 'component_37832';
export function Component37832({ value = 37832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37832, 'data-value': derived.doubled }, children);
}
export default Component37832;
