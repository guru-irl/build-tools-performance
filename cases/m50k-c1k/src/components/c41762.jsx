import React from 'react';
const LABEL_41762 = 'component_41762';
export function Component41762({ value = 41762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41762, 'data-value': derived.doubled }, children);
}
export default Component41762;
