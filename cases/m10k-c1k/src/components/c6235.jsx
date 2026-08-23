import React from 'react';
const LABEL_6235 = 'component_6235';
export function Component6235({ value = 6235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6235, 'data-value': derived.doubled }, children);
}
export default Component6235;
