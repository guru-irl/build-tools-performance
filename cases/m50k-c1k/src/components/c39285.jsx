import React from 'react';
const LABEL_39285 = 'component_39285';
export function Component39285({ value = 39285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39285, 'data-value': derived.doubled }, children);
}
export default Component39285;
