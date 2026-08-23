import React from 'react';
const LABEL_26322 = 'component_26322';
export function Component26322({ value = 26322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26322, 'data-value': derived.doubled }, children);
}
export default Component26322;
