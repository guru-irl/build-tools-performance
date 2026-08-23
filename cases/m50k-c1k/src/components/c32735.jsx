import React from 'react';
const LABEL_32735 = 'component_32735';
export function Component32735({ value = 32735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32735, 'data-value': derived.doubled }, children);
}
export default Component32735;
