import React from 'react';
const LABEL_37912 = 'component_37912';
export function Component37912({ value = 37912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37912, 'data-value': derived.doubled }, children);
}
export default Component37912;
