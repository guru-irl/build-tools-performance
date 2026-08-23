import React from 'react';
const LABEL_19235 = 'component_19235';
export function Component19235({ value = 19235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19235, 'data-value': derived.doubled }, children);
}
export default Component19235;
