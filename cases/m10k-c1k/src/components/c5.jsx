import React from 'react';
const LABEL_5 = 'component_5';
export function Component5({ value = 5, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5, 'data-value': derived.doubled }, children);
}
export default Component5;
