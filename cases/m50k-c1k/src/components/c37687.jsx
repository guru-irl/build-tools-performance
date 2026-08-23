import React from 'react';
const LABEL_37687 = 'component_37687';
export function Component37687({ value = 37687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37687, 'data-value': derived.doubled }, children);
}
export default Component37687;
