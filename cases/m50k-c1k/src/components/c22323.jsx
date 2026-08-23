import React from 'react';
const LABEL_22323 = 'component_22323';
export function Component22323({ value = 22323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22323, 'data-value': derived.doubled }, children);
}
export default Component22323;
