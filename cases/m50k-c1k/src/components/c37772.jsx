import React from 'react';
const LABEL_37772 = 'component_37772';
export function Component37772({ value = 37772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37772, 'data-value': derived.doubled }, children);
}
export default Component37772;
