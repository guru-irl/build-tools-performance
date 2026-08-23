import React from 'react';
const LABEL_25465 = 'component_25465';
export function Component25465({ value = 25465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25465, 'data-value': derived.doubled }, children);
}
export default Component25465;
