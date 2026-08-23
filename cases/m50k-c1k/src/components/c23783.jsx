import React from 'react';
const LABEL_23783 = 'component_23783';
export function Component23783({ value = 23783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23783, 'data-value': derived.doubled }, children);
}
export default Component23783;
