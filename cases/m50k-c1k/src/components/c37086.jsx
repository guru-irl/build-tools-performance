import React from 'react';
const LABEL_37086 = 'component_37086';
export function Component37086({ value = 37086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37086, 'data-value': derived.doubled }, children);
}
export default Component37086;
