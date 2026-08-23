import React from 'react';
const LABEL_37541 = 'component_37541';
export function Component37541({ value = 37541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37541, 'data-value': derived.doubled }, children);
}
export default Component37541;
