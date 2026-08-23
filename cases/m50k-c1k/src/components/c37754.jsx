import React from 'react';
const LABEL_37754 = 'component_37754';
export function Component37754({ value = 37754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37754, 'data-value': derived.doubled }, children);
}
export default Component37754;
