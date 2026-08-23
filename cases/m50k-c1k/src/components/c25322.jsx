import React from 'react';
const LABEL_25322 = 'component_25322';
export function Component25322({ value = 25322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25322, 'data-value': derived.doubled }, children);
}
export default Component25322;
