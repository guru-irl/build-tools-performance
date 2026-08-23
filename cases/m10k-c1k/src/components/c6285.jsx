import React from 'react';
const LABEL_6285 = 'component_6285';
export function Component6285({ value = 6285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6285, 'data-value': derived.doubled }, children);
}
export default Component6285;
