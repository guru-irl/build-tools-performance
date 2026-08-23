import React from 'react';
const LABEL_11235 = 'component_11235';
export function Component11235({ value = 11235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11235, 'data-value': derived.doubled }, children);
}
export default Component11235;
