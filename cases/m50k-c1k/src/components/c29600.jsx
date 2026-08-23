import React from 'react';
const LABEL_29600 = 'component_29600';
export function Component29600({ value = 29600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29600, 'data-value': derived.doubled }, children);
}
export default Component29600;
