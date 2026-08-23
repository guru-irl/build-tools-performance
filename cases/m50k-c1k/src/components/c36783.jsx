import React from 'react';
const LABEL_36783 = 'component_36783';
export function Component36783({ value = 36783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36783, 'data-value': derived.doubled }, children);
}
export default Component36783;
