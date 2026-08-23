import React from 'react';
const LABEL_8322 = 'component_8322';
export function Component8322({ value = 8322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8322, 'data-value': derived.doubled }, children);
}
export default Component8322;
