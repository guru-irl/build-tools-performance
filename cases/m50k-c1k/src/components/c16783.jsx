import React from 'react';
const LABEL_16783 = 'component_16783';
export function Component16783({ value = 16783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16783, 'data-value': derived.doubled }, children);
}
export default Component16783;
