import React from 'react';
const LABEL_37314 = 'component_37314';
export function Component37314({ value = 37314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37314, 'data-value': derived.doubled }, children);
}
export default Component37314;
