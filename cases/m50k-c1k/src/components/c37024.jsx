import React from 'react';
const LABEL_37024 = 'component_37024';
export function Component37024({ value = 37024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37024, 'data-value': derived.doubled }, children);
}
export default Component37024;
