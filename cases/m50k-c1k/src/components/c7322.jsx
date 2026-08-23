import React from 'react';
const LABEL_7322 = 'component_7322';
export function Component7322({ value = 7322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7322, 'data-value': derived.doubled }, children);
}
export default Component7322;
