import React from 'react';
const LABEL_25911 = 'component_25911';
export function Component25911({ value = 25911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25911, 'data-value': derived.doubled }, children);
}
export default Component25911;
