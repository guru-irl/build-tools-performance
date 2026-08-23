import React from 'react';
const LABEL_46322 = 'component_46322';
export function Component46322({ value = 46322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46322, 'data-value': derived.doubled }, children);
}
export default Component46322;
