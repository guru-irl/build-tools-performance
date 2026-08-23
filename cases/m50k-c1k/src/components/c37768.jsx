import React from 'react';
const LABEL_37768 = 'component_37768';
export function Component37768({ value = 37768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37768, 'data-value': derived.doubled }, children);
}
export default Component37768;
