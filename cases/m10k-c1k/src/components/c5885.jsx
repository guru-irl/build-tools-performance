import React from 'react';
const LABEL_5885 = 'component_5885';
export function Component5885({ value = 5885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5885, 'data-value': derived.doubled }, children);
}
export default Component5885;
