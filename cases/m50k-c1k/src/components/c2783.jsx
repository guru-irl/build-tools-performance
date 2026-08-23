import React from 'react';
const LABEL_2783 = 'component_2783';
export function Component2783({ value = 2783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2783, 'data-value': derived.doubled }, children);
}
export default Component2783;
