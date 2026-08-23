import React from 'react';
const LABEL_16911 = 'component_16911';
export function Component16911({ value = 16911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16911, 'data-value': derived.doubled }, children);
}
export default Component16911;
