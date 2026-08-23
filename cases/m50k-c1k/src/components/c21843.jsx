import React from 'react';
const LABEL_21843 = 'component_21843';
export function Component21843({ value = 21843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21843, 'data-value': derived.doubled }, children);
}
export default Component21843;
