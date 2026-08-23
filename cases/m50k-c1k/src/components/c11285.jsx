import React from 'react';
const LABEL_11285 = 'component_11285';
export function Component11285({ value = 11285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11285, 'data-value': derived.doubled }, children);
}
export default Component11285;
