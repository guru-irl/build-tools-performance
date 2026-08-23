import React from 'react';
const LABEL_37864 = 'component_37864';
export function Component37864({ value = 37864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37864, 'data-value': derived.doubled }, children);
}
export default Component37864;
