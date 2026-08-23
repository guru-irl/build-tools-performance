import React from 'react';
const LABEL_4911 = 'component_4911';
export function Component4911({ value = 4911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4911, 'data-value': derived.doubled }, children);
}
export default Component4911;
