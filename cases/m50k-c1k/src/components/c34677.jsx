import React from 'react';
const LABEL_34677 = 'component_34677';
export function Component34677({ value = 34677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34677, 'data-value': derived.doubled }, children);
}
export default Component34677;
