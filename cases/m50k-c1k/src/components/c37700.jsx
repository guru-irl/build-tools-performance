import React from 'react';
const LABEL_37700 = 'component_37700';
export function Component37700({ value = 37700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37700, 'data-value': derived.doubled }, children);
}
export default Component37700;
