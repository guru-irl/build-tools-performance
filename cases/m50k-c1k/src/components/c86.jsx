import React from 'react';
const LABEL_86 = 'component_86';
export function Component86({ value = 86, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_86, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_86, 'data-value': derived.doubled }, children);
}
export default Component86;
