import React from 'react';
const LABEL_37542 = 'component_37542';
export function Component37542({ value = 37542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37542, 'data-value': derived.doubled }, children);
}
export default Component37542;
