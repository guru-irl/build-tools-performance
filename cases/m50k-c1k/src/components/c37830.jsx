import React from 'react';
const LABEL_37830 = 'component_37830';
export function Component37830({ value = 37830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37830, 'data-value': derived.doubled }, children);
}
export default Component37830;
