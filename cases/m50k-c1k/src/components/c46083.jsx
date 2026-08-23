import React from 'react';
const LABEL_46083 = 'component_46083';
export function Component46083({ value = 46083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46083, 'data-value': derived.doubled }, children);
}
export default Component46083;
