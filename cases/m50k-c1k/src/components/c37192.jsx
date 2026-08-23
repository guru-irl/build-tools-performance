import React from 'react';
const LABEL_37192 = 'component_37192';
export function Component37192({ value = 37192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37192, 'data-value': derived.doubled }, children);
}
export default Component37192;
