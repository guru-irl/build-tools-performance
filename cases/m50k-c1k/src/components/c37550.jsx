import React from 'react';
const LABEL_37550 = 'component_37550';
export function Component37550({ value = 37550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37550, 'data-value': derived.doubled }, children);
}
export default Component37550;
