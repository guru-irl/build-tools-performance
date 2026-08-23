import React from 'react';
const LABEL_37391 = 'component_37391';
export function Component37391({ value = 37391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37391, 'data-value': derived.doubled }, children);
}
export default Component37391;
