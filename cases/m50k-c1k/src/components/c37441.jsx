import React from 'react';
const LABEL_37441 = 'component_37441';
export function Component37441({ value = 37441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37441, 'data-value': derived.doubled }, children);
}
export default Component37441;
