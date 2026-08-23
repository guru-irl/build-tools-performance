import React from 'react';
const LABEL_5783 = 'component_5783';
export function Component5783({ value = 5783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5783, 'data-value': derived.doubled }, children);
}
export default Component5783;
