import React from 'react';
const LABEL_1833 = 'component_1833';
export function Component1833({ value = 1833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1833, 'data-value': derived.doubled }, children);
}
export default Component1833;
