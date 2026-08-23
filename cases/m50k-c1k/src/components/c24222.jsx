import React from 'react';
const LABEL_24222 = 'component_24222';
export function Component24222({ value = 24222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24222, 'data-value': derived.doubled }, children);
}
export default Component24222;
