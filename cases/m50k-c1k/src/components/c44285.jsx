import React from 'react';
const LABEL_44285 = 'component_44285';
export function Component44285({ value = 44285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44285, 'data-value': derived.doubled }, children);
}
export default Component44285;
