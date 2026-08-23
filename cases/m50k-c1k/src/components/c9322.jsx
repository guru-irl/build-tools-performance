import React from 'react';
const LABEL_9322 = 'component_9322';
export function Component9322({ value = 9322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9322, 'data-value': derived.doubled }, children);
}
export default Component9322;
