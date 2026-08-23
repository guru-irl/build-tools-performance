import React from 'react';
const LABEL_16434 = 'component_16434';
export function Component16434({ value = 16434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16434, 'data-value': derived.doubled }, children);
}
export default Component16434;
