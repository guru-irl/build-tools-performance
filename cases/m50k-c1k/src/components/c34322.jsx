import React from 'react';
const LABEL_34322 = 'component_34322';
export function Component34322({ value = 34322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34322, 'data-value': derived.doubled }, children);
}
export default Component34322;
