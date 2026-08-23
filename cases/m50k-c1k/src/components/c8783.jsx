import React from 'react';
const LABEL_8783 = 'component_8783';
export function Component8783({ value = 8783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8783, 'data-value': derived.doubled }, children);
}
export default Component8783;
