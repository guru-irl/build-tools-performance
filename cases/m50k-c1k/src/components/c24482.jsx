import React from 'react';
const LABEL_24482 = 'component_24482';
export function Component24482({ value = 24482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24482, 'data-value': derived.doubled }, children);
}
export default Component24482;
