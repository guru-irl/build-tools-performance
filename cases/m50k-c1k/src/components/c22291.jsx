import React from 'react';
const LABEL_22291 = 'component_22291';
export function Component22291({ value = 22291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22291, 'data-value': derived.doubled }, children);
}
export default Component22291;
