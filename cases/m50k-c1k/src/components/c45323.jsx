import React from 'react';
const LABEL_45323 = 'component_45323';
export function Component45323({ value = 45323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45323, 'data-value': derived.doubled }, children);
}
export default Component45323;
