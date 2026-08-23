import React from 'react';
const LABEL_6378 = 'component_6378';
export function Component6378({ value = 6378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6378, 'data-value': derived.doubled }, children);
}
export default Component6378;
