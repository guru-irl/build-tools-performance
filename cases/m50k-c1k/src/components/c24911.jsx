import React from 'react';
const LABEL_24911 = 'component_24911';
export function Component24911({ value = 24911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24911, 'data-value': derived.doubled }, children);
}
export default Component24911;
