import React from 'react';
const LABEL_37781 = 'component_37781';
export function Component37781({ value = 37781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37781, 'data-value': derived.doubled }, children);
}
export default Component37781;
