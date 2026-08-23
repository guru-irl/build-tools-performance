import React from 'react';
const LABEL_22322 = 'component_22322';
export function Component22322({ value = 22322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22322, 'data-value': derived.doubled }, children);
}
export default Component22322;
