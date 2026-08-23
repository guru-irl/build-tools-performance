import React from 'react';
const LABEL_13709 = 'component_13709';
export function Component13709({ value = 13709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13709, 'data-value': derived.doubled }, children);
}
export default Component13709;
