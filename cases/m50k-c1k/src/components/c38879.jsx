import React from 'react';
const LABEL_38879 = 'component_38879';
export function Component38879({ value = 38879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38879, 'data-value': derived.doubled }, children);
}
export default Component38879;
