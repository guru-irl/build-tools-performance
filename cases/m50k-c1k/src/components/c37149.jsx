import React from 'react';
const LABEL_37149 = 'component_37149';
export function Component37149({ value = 37149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37149, 'data-value': derived.doubled }, children);
}
export default Component37149;
