import React from 'react';
const LABEL_37931 = 'component_37931';
export function Component37931({ value = 37931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37931, 'data-value': derived.doubled }, children);
}
export default Component37931;
