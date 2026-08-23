import React from 'react';
const LABEL_37678 = 'component_37678';
export function Component37678({ value = 37678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37678, 'data-value': derived.doubled }, children);
}
export default Component37678;
