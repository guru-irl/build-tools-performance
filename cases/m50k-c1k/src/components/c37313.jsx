import React from 'react';
const LABEL_37313 = 'component_37313';
export function Component37313({ value = 37313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37313, 'data-value': derived.doubled }, children);
}
export default Component37313;
