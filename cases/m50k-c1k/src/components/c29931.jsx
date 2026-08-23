import React from 'react';
const LABEL_29931 = 'component_29931';
export function Component29931({ value = 29931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29931, 'data-value': derived.doubled }, children);
}
export default Component29931;
