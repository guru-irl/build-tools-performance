import React from 'react';
const LABEL_18322 = 'component_18322';
export function Component18322({ value = 18322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18322, 'data-value': derived.doubled }, children);
}
export default Component18322;
