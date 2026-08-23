import React from 'react';
const LABEL_16322 = 'component_16322';
export function Component16322({ value = 16322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16322, 'data-value': derived.doubled }, children);
}
export default Component16322;
