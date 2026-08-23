import React from 'react';
const LABEL_5322 = 'component_5322';
export function Component5322({ value = 5322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5322, 'data-value': derived.doubled }, children);
}
export default Component5322;
