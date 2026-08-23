import React from 'react';
const LABEL_11864 = 'component_11864';
export function Component11864({ value = 11864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11864, 'data-value': derived.doubled }, children);
}
export default Component11864;
