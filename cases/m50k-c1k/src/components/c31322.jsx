import React from 'react';
const LABEL_31322 = 'component_31322';
export function Component31322({ value = 31322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31322, 'data-value': derived.doubled }, children);
}
export default Component31322;
