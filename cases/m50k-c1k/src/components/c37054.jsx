import React from 'react';
const LABEL_37054 = 'component_37054';
export function Component37054({ value = 37054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37054, 'data-value': derived.doubled }, children);
}
export default Component37054;
