import React from 'react';
const LABEL_31731 = 'component_31731';
export function Component31731({ value = 31731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31731, 'data-value': derived.doubled }, children);
}
export default Component31731;
