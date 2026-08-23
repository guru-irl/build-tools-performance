import React from 'react';
const LABEL_41879 = 'component_41879';
export function Component41879({ value = 41879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41879, 'data-value': derived.doubled }, children);
}
export default Component41879;
