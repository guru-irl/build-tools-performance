import React from 'react';
const LABEL_37676 = 'component_37676';
export function Component37676({ value = 37676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37676, 'data-value': derived.doubled }, children);
}
export default Component37676;
