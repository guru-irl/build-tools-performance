import React from 'react';
const LABEL_37065 = 'component_37065';
export function Component37065({ value = 37065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37065, 'data-value': derived.doubled }, children);
}
export default Component37065;
