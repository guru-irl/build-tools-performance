import React from 'react';
const LABEL_37475 = 'component_37475';
export function Component37475({ value = 37475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37475, 'data-value': derived.doubled }, children);
}
export default Component37475;
