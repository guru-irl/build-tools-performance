import React from 'react';
const LABEL_861 = 'component_861';
export function Component861({ value = 861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_861, 'data-value': derived.doubled }, children);
}
export default Component861;
