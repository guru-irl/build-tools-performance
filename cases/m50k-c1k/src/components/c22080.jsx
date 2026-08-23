import React from 'react';
const LABEL_22080 = 'component_22080';
export function Component22080({ value = 22080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22080, 'data-value': derived.doubled }, children);
}
export default Component22080;
