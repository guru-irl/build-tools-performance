import React from 'react';
const LABEL_37428 = 'component_37428';
export function Component37428({ value = 37428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37428, 'data-value': derived.doubled }, children);
}
export default Component37428;
