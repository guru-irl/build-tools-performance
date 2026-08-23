import React from 'react';
const LABEL_38323 = 'component_38323';
export function Component38323({ value = 38323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38323, 'data-value': derived.doubled }, children);
}
export default Component38323;
