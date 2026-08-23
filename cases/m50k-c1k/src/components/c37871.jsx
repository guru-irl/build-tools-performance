import React from 'react';
const LABEL_37871 = 'component_37871';
export function Component37871({ value = 37871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37871, 'data-value': derived.doubled }, children);
}
export default Component37871;
