import React from 'react';
const LABEL_37189 = 'component_37189';
export function Component37189({ value = 37189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37189, 'data-value': derived.doubled }, children);
}
export default Component37189;
