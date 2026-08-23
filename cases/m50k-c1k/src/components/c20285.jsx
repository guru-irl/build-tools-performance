import React from 'react';
const LABEL_20285 = 'component_20285';
export function Component20285({ value = 20285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20285, 'data-value': derived.doubled }, children);
}
export default Component20285;
