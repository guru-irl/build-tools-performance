import React from 'react';
const LABEL_11735 = 'component_11735';
export function Component11735({ value = 11735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11735, 'data-value': derived.doubled }, children);
}
export default Component11735;
