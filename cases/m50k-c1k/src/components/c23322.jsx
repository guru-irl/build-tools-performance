import React from 'react';
const LABEL_23322 = 'component_23322';
export function Component23322({ value = 23322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23322, 'data-value': derived.doubled }, children);
}
export default Component23322;
