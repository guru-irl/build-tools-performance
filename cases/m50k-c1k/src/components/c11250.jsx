import React from 'react';
const LABEL_11250 = 'component_11250';
export function Component11250({ value = 11250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11250, 'data-value': derived.doubled }, children);
}
export default Component11250;
